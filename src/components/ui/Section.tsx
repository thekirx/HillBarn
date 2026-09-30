import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  register?: "paper" | "night" | "grounds" | "teal";
  contained?: boolean;
};

export function Section({ children, register = "paper", contained = false, className = "", ...props }: SectionProps) {
  return (
    <section className={`section ${contained ? "section--contained" : ""} ${className}`.trim()} data-register={register} {...props}>
      {children}
    </section>
  );
}
