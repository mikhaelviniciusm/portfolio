import type { ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

// Card de superfície com borda hairline e transição sutil de estado.
export function SpotlightCard({
  children,
  className = "",
  as = "div",
}: SpotlightCardProps) {
  const Component = as;

  return <Component className={`spotlight-card rounded-xl ${className}`}>{children}</Component>;
}
