interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  headingId: string;
}

// Cabeçalho padrão de seção com hierarquia por tamanho e contraste.
export function SectionHeading({
  index,
  title,
  subtitle,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="font-mono text-xs font-medium text-[var(--text-muted)] tabular-nums">
        {index}
      </p>
      <h2
        id={headingId}
        className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl"
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
