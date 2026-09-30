import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text" | "light";
  className?: string;
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const props = {
    className: `button button--${variant} ${className}`.trim(),
    "data-variant": variant,
  };

  if (external) {
    return <a href={href} {...props}>{children}</a>;
  }

  return <Link href={href} {...props}>{children}</Link>;
}
