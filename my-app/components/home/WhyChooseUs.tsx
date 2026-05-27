import { DynamicIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const cardColors = [
  "bg-violet-50 border-violet-100",
  "bg-sky-50 border-sky-100",
  "bg-emerald-50 border-emerald-100",
  "bg-orange-50 border-orange-100",
];

const iconColors = [
  "bg-violet-200 text-violet-800",
  "bg-sky-200 text-sky-800",
  "bg-emerald-200 text-emerald-800",
  "bg-orange-200 text-orange-800",
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why TrioPulse"
          title="Why choose us"
          description="We focus on thoughtful collaboration, reliable execution, and digital solutions that create long-term value for growing businesses."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cardColors[index]}`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${iconColors[index]}`}
              >
                <DynamicIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
