import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = PORTFOLIO_ITEMS.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-[calc(var(--header-offset)+2rem)] pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            {project.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            {project.description}
          </p>
        </div>

        {/* Project Information */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Industry</p>
            <p className="mt-1 font-semibold text-gray-900">
              {project.industry}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Timeline</p>
            <p className="mt-1 font-semibold text-gray-900">
              {project.timeline}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Location</p>
            <p className="mt-1 font-semibold text-gray-900">
              {project.location}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Project Type</p>
            <p className="mt-1 font-semibold text-gray-900">
              {project.category}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies Used
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies?.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Results Delivered
          </h2>

          <div className="mt-8 grid gap-4">
            {project.results?.map((result: string) => (
              <div
                key={result}
                className="rounded-2xl border border-green-100 bg-green-50 p-5"
              >
                <span className="font-medium text-green-800">
                  ✓ {result}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Existing Tags */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Project Highlights
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl bg-gradient-to-r from-violet-600 to-sky-600 p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Want a similar solution for your business?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            We help businesses build scalable websites, software platforms,
            AI-powered solutions, and digital experiences that drive real
            results.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Website
            </Button>

            <Button href="/contact" variant="secondary">
              Start Your Project
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}