"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { siteConfig } from "@/src/lib/site";

type FormState = {
  name: string;
  email: string;
  organization: string;
  reason: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  reason: siteConfig.contactReasons[0],
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(data.message ?? "Unable to submit form.");
      } else {
        setStatus("Message sent. We will reply shortly.");
        setForm(initialState);
      }
    } catch {
      setStatus("Network error. Please use email as a fallback.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          required
          className="mt-1 w-full rounded-xl border bg-[var(--surface)] px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          required
          className="mt-1 w-full rounded-xl border bg-[var(--surface)] px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="organization" className="text-sm font-medium">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          value={form.organization}
          onChange={(event) =>
            setForm({ ...form, organization: event.target.value })
          }
          className="mt-1 w-full rounded-xl border bg-[var(--surface)] px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="reason" className="text-sm font-medium">
          How can we help?
        </label>
        <select
          id="reason"
          name="reason"
          value={form.reason}
          onChange={(event) => setForm({ ...form, reason: event.target.value })}
          className="mt-1 w-full rounded-xl border bg-[var(--surface)] px-3 py-2 text-sm"
        >
          {siteConfig.contactReasons.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          required
          rows={5}
          className="mt-1 w-full rounded-xl border bg-[var(--surface)] px-3 py-2 text-sm"
        />
      </div>

      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={form.website}
          onChange={(event) => setForm({ ...form, website: event.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Do not include patient information.
      </p>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </Button>
        <a
          href={siteConfig.contactMailto}
          className="text-sm underline underline-offset-4"
        >
          Email instead
        </a>
      </div>

      {status ? (
        <p className="text-sm text-slate-700 dark:text-slate-200">{status}</p>
      ) : null}
    </form>
  );
}
