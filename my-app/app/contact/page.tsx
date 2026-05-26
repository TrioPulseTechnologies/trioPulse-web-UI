import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with TrioPulse for web development, SEO, AI automation, and custom software inquiries.",
  path: "/contact",
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.address,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100/60 via-violet-50/80 to-sky-50/80 pt-[calc(var(--header-offset)+2rem)] pb-16">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We&apos;d love to hear about your project. Reach out and we&apos;ll respond within
            one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-5 lg:gap-16 sm:px-6 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
            <p className="mt-3 text-gray-600">
              Whether you need a new website, SEO strategy, AI automation, or custom
              software — our team is ready to help.
            </p>

            <ul className="mt-8 space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-gray-900 hover:text-violet-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
