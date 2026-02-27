import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border bg-[var(--surface)] p-6 shadow-sm shadow-slate-900/5 dark:shadow-black/15 ${className}`}
    >
      {children}
    </article>
  );
}
