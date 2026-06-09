import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "Browse TrioPulse portfolio - web development, SEO campaigns, AI automation, and custom software projects.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const badges = [
    "bg-violet-100 text-violet-800",
    "bg-sky-100 text-sky-800",
    "bg-emerald-100 text-emerald-800",
    "bg-orange-100 text-orange-800",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100/80 via-violet-50/60 to-emerald-50/80 pt-[calc(var(--header-offset)+2rem)] pb-16">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A curated collection of digital experiences, business platforms, and custom solutions crafted to help brands grow, engage audiences, and achieve measurable results.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group block overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${badges[index % badges.length]
                      }`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-sky-50 p-8 text-center md:p-12">
            <SectionHeading
              title="Ready to bring vision live?"
              description="Whether you're launching a new brand, scaling your business, or building a custom solution, we're here to turn your ideas into reality."
            />
            <Button href="/contact">
              Start Your Project
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}