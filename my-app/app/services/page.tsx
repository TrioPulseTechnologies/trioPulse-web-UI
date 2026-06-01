import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { DynamicIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Digital Services for Growing Businesses | Triopulse Technologies",
  description:
    "Whether you need a new website, help with SEO, automation, or custom software, we work closely with you to build solutions that fit your goals.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-100/80 via-sky-50/60 to-emerald-50/80 pt-[calc(var(--header-offset)+2rem)] pb-16">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Supporting business growth through modern websites, smart strategies, and technology designed to make every day work simpler and more effective.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            const pastels = [
              "from-violet-50 to-white border-violet-100",
              "from-sky-50 to-white border-sky-100",
              "from-emerald-50 to-white border-emerald-100",
              "from-orange-50 to-white border-orange-100",
            ];

            return (
              <article
                key={service.id}
                id={service.id}
                className={`scroll-mt-28 grid items-center gap-10 rounded-3xl border bg-gradient-to-br p-6 md:grid-cols-2 md:gap-16 md:p-10 ${pastels[index]} ${isReversed ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${isReversed ? "md:[direction:ltr]" : ""}`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} - TrioPulse service`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className={isReversed ? "md:[direction:ltr]" : ""}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                    <DynamicIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button href="/contact">Get Started</Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-4 mb-20 max-w-7xl rounded-3xl bg-violet-50 px-8 py-12 text-center sm:mx-auto">
        <SectionHeading
          title="Every business grows differently"
          description="Share your goals with us, and we’ll help you choose the right path with clarity, honesty, and thoughtful guidance."
        />
        <Button href="/contact">Book a Free Consultation</Button>
      </section>
    </>
  );
}
