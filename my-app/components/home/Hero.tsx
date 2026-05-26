import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-[var(--header-offset)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 via-sky-50/60 to-emerald-50/80" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-violet-800 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden />
            Digital solutions that drive growth
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Build smarter.{" "}
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Grow faster.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            {SITE.name} helps businesses succeed with expert web development, SEO,
            AI automation, and custom software — crafted with precision and care.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact">
              Start Your Project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Our Work
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-violet-100 pt-8 sm:gap-8">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "4+", label: "Core Services" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-2xl shadow-violet-200/50 backdrop-blur-sm">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85"
              alt="TrioPulse team collaborating on digital projects"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white bg-white/95 p-4 shadow-xl sm:-bottom-6 sm:-left-6">
            <p className="text-xs font-medium uppercase tracking-wider text-violet-600">
              Trusted by
            </p>
            <p className="mt-1 text-lg font-bold text-gray-900">Growing Businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
