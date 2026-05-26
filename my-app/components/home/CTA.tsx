import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section
      className="mx-4 mb-20 max-w-7xl overflow-hidden rounded-3xl bg-gray-900 sm:mx-auto lg:mb-28"
      aria-labelledby="cta-heading"
    >
      <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-sky-600/20" />
        <div className="relative">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Let&apos;s discuss your project and create a solution tailored to your goals.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="!bg-white !text-gray-900 hover:!bg-gray-100"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-gray-900">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
