import type { HTMLAttributes, ReactNode } from "react";

export function Kicker({ children, className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`kicker ${className}`.trim()} {...props}>{children}</p>;
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "large" | "medium" | "small";
};

export function DisplayHeading({ children, as: Tag = "h2", size = "large", className = "", ...props }: HeadingProps) {
  return <Tag className={`display-heading display-heading--${size} ${className}`.trim()} {...props}>{children}</Tag>;
}

export function EditorialQuote({ children, className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`editorial-quote ${className}`.trim()} {...props}>{children}</p>;
}
