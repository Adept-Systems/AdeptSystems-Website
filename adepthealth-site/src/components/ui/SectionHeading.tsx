type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-pretty text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </header>
  );
}
