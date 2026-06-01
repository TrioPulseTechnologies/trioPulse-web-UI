import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTA } from "@/components/home/CTA";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Triopulse Technologies | Websites, SEO and Custom Software",
  description:
    "We help businesses build better websites, get found on Google, and create software that solves everyday challenges. No unnecessary complexity-just practical digital solutions.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
