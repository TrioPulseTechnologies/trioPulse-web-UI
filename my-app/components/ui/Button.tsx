import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20",
  secondary:
    "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm",
  outline:
    "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
};

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className = "",
  external,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500";

  if (external) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
