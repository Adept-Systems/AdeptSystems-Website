import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantClasses = {
  primary:
    "border border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-[var(--primary)]",
  secondary:
    "border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground)] hover:-translate-y-0.5 hover:bg-[var(--surface)] focus-visible:outline-[var(--primary)]",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
