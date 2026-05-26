import type { Metadata } from "next";
import { Globe2, Lightbulb, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { Layers } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about TrioPulse — a results-focused web development and digital strategy team delivering modern websites, SEO, AI automation, and software solutions.",
  path: "/about-us",
});

const values = [
  {
    icon: Globe2,
    title: "Strategic growth",
    description:
      "We build more than websites. Every project is designed to create business momentum, measurable results, and long-term value.",
  },
  {
    icon: Lightbulb,
    title: "Creative clarity",
    description:
      "Our designs are clean, user-first, and conversion-driven so your brand feels polished and memorable across every touchpoint.",
  },
  {
    icon: Users,
    title: "Collaborative partnership",
    description:
      "You’ll work with a small, responsive team that listens, adapts, and delivers on time with transparent communication.",
  },
];

const stats = [
  { value: "100+", label: "Projects launched" },
  { value: "20%", label: "Average traffic lift" },
  { value: "4.9/5", label: "Average client rating" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-100/80 via-sky-50/80 to-emerald-50/80 pt-[calc(var(--header-offset)+2rem)] pb-16">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            About TrioPulse
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We help ambitious brands grow with thoughtful digital products and automation.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            TrioPulse blends design, development, SEO, and AI expertise to deliver websites and systems that attract attention, convert visitors, and power business growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Book a call</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we are"
            title="A modern digital team built for growing businesses"
            description="We combine strategy, performance, and craftsmanship to create digital experiences that feel premium and perform reliably.
"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <SectionHeading
                title="Designed to deliver value at every stage"
                description="Our process is fast, transparent, and focused on the metrics that matter—traffic, conversions, efficiency, and long-term growth."
                align="left"
              />
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Sparkles className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Brand-driven digital strategy</p>
                    <p className="mt-2 text-gray-600">We shape every website and campaign around your business goals, audience, and unique value.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Layers className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Clean execution with strong polish</p>
                    <p className="mt-2 text-gray-600">Pixel-perfect design, thoughtful interactions, and modern build quality keep your site feeling premium.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Users className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">A collaborative process</p>
                    <p className="mt-2 text-gray-600">We keep communication clear, feedback fast, and delivery reliable from kickoff through launch.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-violet-50 p-8 shadow-sm">
              <div className="space-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm">
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 mb-20 max-w-7xl rounded-3xl bg-violet-50 px-8 py-12 text-center sm:mx-auto">
        <SectionHeading
          title="Ready to grow with TrioPulse?"
          description="Talk to us about your next website, SEO strategy, AI automation, or custom software project."
        />
        <Button href="/contact">Book a call</Button>
      </section>
    </>
  );
}
