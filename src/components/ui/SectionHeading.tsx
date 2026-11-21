interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  headingId: string;
}

// Cabeçalho padrão de seção com índice monospace e hierarquia tipográfica clara.
export function SectionHeading({
  index,
  title,
  subtitle,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs font-medium tracking-wider text-[var(--accent-cyan-text)] uppercase">
        {index}
      </p>
      <h2
        id={headingId}
        className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
