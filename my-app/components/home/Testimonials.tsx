import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Don't just take our word for it — hear from businesses we've helped succeed."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => {
            const pastels = [
              "border-violet-200 bg-gradient-to-br from-violet-50 to-white",
              "border-sky-200 bg-gradient-to-br from-sky-50 to-white",
              "border-emerald-200 bg-gradient-to-br from-emerald-50 to-white",
            ];
            return (
              <blockquote
                key={testimonial.author}
                className={`flex flex-col rounded-3xl border p-6 shadow-sm ${pastels[index]}`}
              >
                <Quote
                  className="h-8 w-8 text-violet-300"
                  aria-hidden
                />
                <div className="mt-3 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-gray-100 pt-4">
                  <cite className="not-italic">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </cite>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
