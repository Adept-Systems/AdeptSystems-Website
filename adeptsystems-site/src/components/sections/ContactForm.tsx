"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
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
  const [isReasonOpen, setIsReasonOpen] = useState(false);
  const reasonMenuRef = useRef<HTMLDivElement | null>(null);
  const fieldClasses =
    "mt-1 w-full rounded-xl border bg-[var(--surface)] px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-300/25 focus:border-amber-300/60";

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!reasonMenuRef.current) return;
      if (!reasonMenuRef.current.contains(event.target as Node)) {
        setIsReasonOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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
          className={fieldClasses}
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
          className={fieldClasses}
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
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="reason" className="text-sm font-medium">
          How can we help?
        </label>
        <div ref={reasonMenuRef} className="relative mt-1">
          <button
            id="reason"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isReasonOpen}
            onClick={() => setIsReasonOpen((current) => !current)}
            className={`${fieldClasses} mt-0 flex items-center justify-between pr-12 text-left`}
          >
            <span>{form.reason}</span>
          </button>
          <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className={`h-4 w-4 translate-y-[1px] text-[var(--primary)] transition duration-300 ${isReasonOpen ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
          {isReasonOpen ? (
            <ul
              role="listbox"
              aria-labelledby="reason"
              className="absolute z-30 mt-2 w-full rounded-xl border bg-[var(--surface)] p-1"
            >
              {siteConfig.contactReasons.map((item) => {
                const isSelected = form.reason === item;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setForm({ ...form, reason: item });
                        setIsReasonOpen(false);
                      }}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${isSelected ? "bg-amber-300/12 text-[var(--foreground)]" : "text-zinc-700 hover:bg-[var(--surface-muted)] dark:text-zinc-200"}`}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
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
          className={fieldClasses}
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
        Avoid including confidential, regulated, or sensitive personal data in
        this form.
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
