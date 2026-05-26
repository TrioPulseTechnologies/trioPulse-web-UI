import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";

export function TechStack() {
  const categories = [...new Set(TECH_STACK.map((t) => t.category))];

  return (
    <section
      id="tech-stack"
      className="bg-gradient-to-b from-violet-50/50 to-sky-50/30 py-20 md:py-28"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technologies"
          title="Our tech stack"
          description="We use modern, battle-tested technologies to build scalable and maintainable solutions."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech.name}
              className="rounded-2xl border border-white bg-white/80 px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => {
            const items = TECH_STACK.filter((t) => t.category === category);
            const gradients = [
              "from-violet-100 to-white",
              "from-sky-100 to-white",
              "from-emerald-100 to-white",
              "from-orange-100 to-white",
            ];
            return (
              <div
                key={category}
                className={`rounded-3xl border border-gray-100 bg-gradient-to-br p-5 ${gradients[i % gradients.length]}`}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {category}
                </h3>
                <ul className="mt-3 space-y-1">
                  {items.map((tech) => (
                    <li key={tech.name} className="font-medium text-gray-800">
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
