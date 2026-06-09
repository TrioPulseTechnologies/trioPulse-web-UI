"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Variants, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-[var(--header-offset)]"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 via-sky-50/60 to-emerald-50/80" />

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20 sm:px-6 lg:px-8"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUpVariants}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-sm font-medium text-violet-800 shadow-sm backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          Web • SEO • AI • Software
        </motion.div>

        {/* Content */}
        <div className="text-center">
          <motion.h1
            variants={fadeUpVariants}
            id="hero-heading"
            className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block text-gray-900">
              Smart solutions{" "}
              <span className="inline-block text-2xl italic font-semibold text-gray-500 sm:text-3xl">
                for
              </span>
            </span>

            <span
              className="
                mt-4 block
                bg-[linear-gradient(90deg,#7c3aed,#0ea5e9,#7c3aed)]
                bg-[length:200%_auto]
                bg-clip-text
                text-transparent
                animate-[gradient_8s_linear_infinite]
              "
            >
              modern businesses.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            {SITE.name} delivers high-performing websites, SEO strategies,
            AI automation, and custom software solutions designed to help
            modern businesses scale faster and grow smarter.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUpVariants}
          className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            href="/contact"
            className="w-full transition-all duration-300 hover:scale-105 sm:w-auto"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>

          {/* Optional Secondary CTA */}
          {/*
          <Button
            href="/portfolio"
            variant="secondary"
            className="w-full transition-all duration-300 hover:scale-105 sm:w-auto"
          >
            View Our Work
          </Button>
          */}
        </motion.div>

        {/* Optional trust text */}
        <motion.p
          variants={fadeUpVariants}
          className="text-sm text-gray-500"
        >
          Trusted by businesses looking to grow through modern digital solutions.
        </motion.p>
      </motion.div>
    </section>
  );
}