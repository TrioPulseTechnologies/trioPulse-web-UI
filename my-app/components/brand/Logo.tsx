import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

type LogoProps = {
  className?: string;
  asLink?: boolean;
  size?: "header" | "md";
};

const sizes = {
  /** Prominent size for navigation bar */
  header: "h-10 w-auto sm:h-11 md:h-12",
  md: "h-11 w-auto sm:h-12",
};

export function Logo({
  className = "",
  asLink = true,
  size = "header",
}: LogoProps) {
  const img = (
    <Image
      src="/triopulse-header-logo.svg"
      alt="TrioPulse"
      width={293}
      height={65}
      className={`${sizes[size]} ${className}`}
      priority={size === "header"}
    />
  );

  if (!asLink) {
    return (
      <div className="inline-flex shrink-0 items-center" aria-label="TrioPulse">
        {img}
      </div>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center rounded-md outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2"
      aria-label={`${SITE.name} - Go to homepage`}
    >
      {img}
    </Link>
  );
}
