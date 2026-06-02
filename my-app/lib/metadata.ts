import type { Metadata } from "next";
import { SITE } from "./constants";

const defaultOgImage = `${SITE.url}/triopulse-og-image.png`;

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title ? `${title}` : `${SITE.name} - ${SITE.tagline}`;
  const desc = description ?? SITE.description;
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: SITE.name }],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [defaultOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    keywords: [
      "Triopulse Technologies",
      "web development",
      "website development company",
      "SEO services",
      "search engine optimization",
      "AI automation",
      "business automation",
      "custom software development",
      "digital solutions",
      "software company",
    ],
    manifest: "/site.webmanifest",
    themeColor: "#000000",
  };
}
