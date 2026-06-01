import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/constants";
import { FaLinkedin, FaXTwitter  } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-100 bg-gradient-to-b from-white to-violet-50/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-violet-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-gray-600 transition-colors hover:text-violet-700"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-700"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-700"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {SITE.address}
              </li>
              <li>
                <div className="mt-3 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/123323926"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-600 transition-colors hover:text-violet-700"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>

                  <a
                    href="https://x.com/triopulsetech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-gray-600 transition-colors hover:text-violet-700"
                  >
                    <FaXTwitter className="h-5 w-5" />
                  </a>

                  <a
                    href="https://wa.me/+918469893890?text=Hello%20TrioPulse%2C%20I%20want%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-gray-600 transition-colors hover:text-green-600"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.instagram.com/triopulsetechnology"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-gray-600 transition-colors hover:text-pink-600"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 flex items-center">
            <Logo size="md" asLink={false} className="!h-11 sm:!h-12" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-400 sm:text-right">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
