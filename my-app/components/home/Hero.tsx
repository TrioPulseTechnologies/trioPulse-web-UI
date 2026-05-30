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

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-sm font-medium text-violet-800 shadow-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" aria-hidden />
          Web • SEO • AI • Software
        </div>

        <div className="text-center">
          <h1
            id="hero-heading"
            className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block text-gray-900">
              Smart solutions <span className="inline-block text-2xl italic font-semibold text-gray-500 sm:text-3xl">for</span>
            </span>
            <span className="mt-4 block bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              modern businesses.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            {SITE.name} delivers high-performing websites, SEO strategies,
            AI automation, and custom software solutions designed to help modern businesses 
            scale faster and grow smarter.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" className="w-full sm:w-auto">
            Start Your Project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          {/* <Button href="/portfolio" variant="secondary" className="w-full sm:w-auto">
            View Our Work
          </Button> */}
        </div>
      </div>
    </section>
  );
}
