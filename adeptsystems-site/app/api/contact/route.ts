import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  reason?: string;
  message?: string;
  website?: string;
  cfTurnstileToken?: string;
};

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const timestamps = requestLog.get(key) ?? [];
  const recent = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(key, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function verifyTurnstileToken(token: string, clientIp?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      success: false,
      message: "Captcha is not configured on the server.",
    };
  }

  const formData = new URLSearchParams({
    secret,
    response: token,
  });

  if (clientIp) {
    formData.set("remoteip", clientIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    },
  );

  if (!response.ok) {
    return {
      success: false,
      message: "Captcha verification request failed.",
    };
  }

  const data = (await response.json()) as TurnstileResponse;

  if (!data.success) {
    const errorCodes = data["error-codes"]?.join(", ");
    return {
      success: false,
      message: errorCodes
        ? `Captcha verification failed: ${errorCodes}.`
        : "Captcha verification failed.",
    };
  }

  return {
    success: true,
    message: "",
  };
}

async function sendContactEmail(payload: {
  name: string;
  email: string;
  organization: string;
  reason: string;
  message: string;
}) {
  const destinationEmail = process.env.CONTACT_EMAIL;

  if (!destinationEmail) {
    console.warn("CONTACT_EMAIL is not configured. Logging contact submission instead.", payload);
    return { success: true };
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("Adept Systems contact submission", {
      ...payload,
      submittedAt: new Date().toISOString(),
      delivery: "logged-no-resend-key",
    });
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const escapedMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  const emailResult = await resend.emails.send({
    from: "Adept Systems <contact@adeptsystems.ai>",
    to: destinationEmail,
    replyTo: payload.email,
    subject: "New contact form submission",
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Organization: ${payload.organization || "Not provided"}`,
      `Reason: ${payload.reason}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <h1>New contact form submission</h1>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(payload.organization || "Not provided")}</p>
      <p><strong>Reason:</strong> ${escapeHtml(payload.reason)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapedMessage}</p>
    `,
  });

  if (emailResult.error) {
    console.error("Failed to send contact email", emailResult.error);
    return {
      success: false,
      message: "Message accepted, but email delivery failed.",
    };
  }

  return { success: true };
}

export async function POST(request: NextRequest) {
  const key = getClientKey(request);

  if (isRateLimited(key)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const organization = body.organization?.trim() ?? "";
  const reason = body.reason?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const cfTurnstileToken = body.cfTurnstileToken?.trim() ?? "";

  if (!cfTurnstileToken) {
    return NextResponse.json(
      { message: "Please complete the captcha challenge." },
      { status: 400 },
    );
  }

  const turnstileVerification = await verifyTurnstileToken(cfTurnstileToken, key);

  if (!turnstileVerification.success) {
    return NextResponse.json(
      { message: turnstileVerification.message },
      { status: 400 },
    );
  }

  if (website) {
    return NextResponse.json({ message: "Submission received." }, { status: 200 });
  }

  if (!name || !email || !message || !reason) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const emailResult = await sendContactEmail({
    name,
    email,
    organization,
    reason,
    message,
  });

  if (!emailResult.success) {
    return NextResponse.json(
      { message: emailResult.message ?? "Unable to send your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Submission received." }, { status: 200 });
}
