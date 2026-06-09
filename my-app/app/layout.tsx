import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { BackToTop } from "@/components/ui/BackToTop";
import { Loader } from "@/components/ui/Loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Triopulse Technologies | Websites, SEO and Custom Software",
  description:
    "We help businesses build better websites, get found on Google, and create software that solves everyday challenges. No unnecessary complexity-just practical digital solutions.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
          <BackToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
