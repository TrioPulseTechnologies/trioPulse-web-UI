import type { Metadata } from "next";
import { Globe2, Lightbulb, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/metadata";

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

const teamMembers = [
  {
    name: "Kirtan Gajjar",
    designation: "Founder",
    description:
      "At TrioPulse, I lead AI and data-driven innovation, working on intelligent solutions that combine data science, AI analysis, and modern technology to help businesses make smarter decisions and build scalable digital products.",
    photo: "/images/team/kirtan.jpeg",
    linkedin: "https://www.linkedin.com/in/kirtan-sondagar-07b7a22a5",
  },
  {
    name: "Priyank Gajjar",
    designation: "CEO",
    description:
      "At TrioPulse, I lead the vision of creating thoughtful digital products and scalable technology solutions for businesses across finance, real estate, lifestyle, and education sectors.",
    photo: "/images/team/priyank.jpeg",
    linkedin: "https://www.linkedin.com/in/priyanksondagar",
  },
  {
    name: "Dipali Gajjar",
    designation: "Co-founder",
    description:
      "At TrioPulse, I work across SEO, content writing, design, and frontend development to create clear, engaging, and user-focused digital experiences that help brands grow their online presence.",
    photo: "/images/team/dipali.jpeg",
    linkedin: "https://www.linkedin.com/in/dipali-gangajaliya-6715832a2",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-100/80 via-sky-50/80 to-emerald-50/80 pt-[calc(var(--header-offset)+2rem)] pb-16">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About TrioPulse
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            At TrioPulse, we believe technology should feel simple,
            meaningful, and genuinely helpful. We partner with businesses
            to create modern digital experiences that support long-term
            growth and real connections.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Contact Us</Button>

            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Team" title=" " />

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-64 w-44 rounded-3xl object-cover"
                  />
                </div>

                <h2 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h2>

                <p className="mt-1 text-sm font-medium text-violet-600">
                  {member.designation}
                </p>

                <p className="mt-4 text-gray-600">
                  {member.description}
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition hover:bg-violet-100"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-4V8z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY & MISSION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* OUR STORY */}
            <div className="rounded-3xl border border-violet-100 bg-white p-8 shadow-sm">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <Users className="h-6 w-6" aria-hidden />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Our Story
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                TrioPulse was created by three individuals from different
                backgrounds who came together with one goal — helping
                businesses grow through thoughtful digital solutions.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                By combining creativity, strategy, and technology, we
                build modern digital experiences that feel premium,
                perform reliably, and create long-term value for brands.
              </p>
            </div>

            {/* OUR MISSION */}
            <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-violet-50 to-sky-50 p-8 shadow-sm">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
                <Sparkles className="h-6 w-6" aria-hidden />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Our Mission
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We believe digital solutions should feel simple,
                reliable, and genuinely helpful for businesses and the
                people behind them.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our mission is to create websites, SEO strategies, AI
                automations, and software systems that help businesses
                grow with clarity, efficiency, and confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOLLOW SECTION */}
      <section className="relative overflow-hidden py-16 md:py-24">

        {/* BACKGROUND BLOBS */}
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />

        {/* GRID PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#7c3aed 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-600">
            Stay Connected
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Follow TrioPulse
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Connect with us for updates, insights, project showcases,
            and the latest digital ideas shaping modern businesses.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/company/triopulse-technologies"
              target="_blank"
              className="group rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-4V8z" />
                  </svg>
                </div>

                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    LinkedIn
                  </p>

                  <p className="text-sm text-gray-500">
                    @triopulsetech
                  </p>
                </div>

              </div>
            </a>

            {/* TWITTER */}
            <a
              href="https://x.com/triopulsetech"
              target="_blank"
              className="group rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.86 1.1A4.52 4.52 0 0 0 16.11 0c-2.63 0-4.64 2.44-4.05 5A12.94 12.94 0 0 1 1.64.89 4.48 4.48 0 0 0 3 6.86 4.41 4.41 0 0 1 .96 6.3v.06a4.51 4.51 0 0 0 3.62 4.42 4.52 4.52 0 0 1-2.03.08 4.52 4.52 0 0 0 4.22 3.12A9.05 9.05 0 0 1 0 19.54 12.73 12.73 0 0 0 6.92 22c8.3 0 12.84-6.86 12.84-12.8 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" />
                  </svg>
                </div>

                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    Twitter
                  </p>

                  <p className="text-sm text-gray-500">
                    @triopulsetech
                  </p>
                </div>

              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/+918469893890?text=Hello%20TrioPulse%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.53 0 .2 5.33.2 11.86c0 2.1.55 4.15 1.59 5.96L0 24l6.36-1.66a11.8 11.8 0 0 0 5.7 1.45h.01c6.53 0 11.86-5.33 11.86-11.86 0-3.17-1.23-6.14-3.41-8.45zM12.07 21.7a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.77.98 1-3.67-.24-.38a9.75 9.75 0 0 1-1.5-5.19c0-5.4 4.39-9.79 9.8-9.79 2.62 0 5.08 1.02 6.92 2.87a9.72 9.72 0 0 1 2.87 6.92c0 5.4-4.4 9.8-9.8 9.8zm5.37-7.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5 0 1.47 1.08 2.89 1.23 3.1.15.2 2.12 3.23 5.14 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
                  </svg>
                </div>

                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    WhatsApp
                  </p>

                  <p className="text-sm text-gray-500">
                    Chat with us
                  </p>
                </div>

              </div>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/triopulsetechnology/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-700 transition group-hover:bg-pink-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm8.9 1.35a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 6.2A5.8 5.8 0 1 0 17.8 12 5.81 5.81 0 0 0 12 6.2zm0 1.8A4 4 0 1 1 8 12a4 4 0 0 1 4-4z" />
                  </svg>
                </div>

                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    Instagram
                  </p>

                  <p className="text-sm text-gray-500">
                    @triopulsetechnology
                  </p>
                </div>

              </div>
            </a>

          </div>
        </div>
      </section>

      <section className="mx-4 mb-20 max-w-7xl rounded-3xl bg-violet-50 px-8 py-12 text-center sm:mx-auto">
        <SectionHeading
          title="We’d love to hear about your ideas."
          description="Whether you’re starting small or planning something bigger, we’re here to help you move forward confidently."
        />

        <Button href="/contact">Start a Conversation</Button>
      </section>
    </>
  );
}