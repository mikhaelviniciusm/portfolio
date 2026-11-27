interface SectionHeadingProps {
  index?: string;
  title: string;
  subtitle?: string;
  headingId: string;
}

// Cabeçalho de seção com hierarquia tipográfica direta (sem kickers redundantes acima do título).
export function SectionHeading({
  title,
  subtitle,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-[62ch]">
      <h2
        id={headingId}
        className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2.5 text-base leading-relaxed text-[var(--text-secondary)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
