"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-violet-200/70 bg-background/95 shadow-lg shadow-violet-200/15"
            : "border-violet-100/60 bg-gradient-to-br from-violet-50/75 via-background/85 to-sky-50/75 shadow-md shadow-violet-100/25"
        }`}
      >
        <div className="flex min-h-[4.25rem] items-center justify-between gap-4 px-4 sm:min-h-[4.75rem] sm:gap-6 sm:px-6">
          {/* Logo — prominent */}
          <Image
            src="/triopulse-header-logo.svg"
            alt="TrioPulse"
            width={299}
            height={65}
            className="shrink-0 h-10 w-auto sm:h-11 md:h-12"
            priority
          />

          {/* Desktop navigation */}
          <nav
            className="hidden flex-1 items-center justify-center md:flex"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-0.5 lg:gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors lg:px-4 ${
                        active
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-violet-50 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              Book a call
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/60 bg-violet-50/40 text-gray-700 transition hover:border-violet-300 hover:bg-violet-50/70 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`border-t border-violet-100/80 transition-all duration-300 md:hidden ${
            mobileOpen ? "visible opacity-100" : "invisible max-h-0 opacity-0 overflow-hidden border-t-transparent"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav className="space-y-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-violet-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Book a call
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
