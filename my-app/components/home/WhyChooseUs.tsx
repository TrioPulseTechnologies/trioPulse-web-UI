"use client";

import { motion, Variants } from "framer-motion";
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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading
            eyebrow="Why TrioPulse"
            title="Why choose us"
            description="We focus on thoughtful collaboration, reliable execution, and digital solutions that create long-term value for growing businesses."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    p-6
    shadow-sm
    transition-all
    duration-300
    hover:shadow-xl
    ${cardColors[index]}
  `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${iconColors[index]}`}
              >
                <DynamicIcon name={item.icon} className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section >
  );
}
