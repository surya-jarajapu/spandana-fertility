"use client";

import { motion } from "framer-motion";

export type TimelineStep = { title: string; text: string };

export default function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-rose-500 via-violet-500 to-cyan-500 sm:left-6" />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative flex gap-5 pl-0 sm:gap-6"
          >
            <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-violet-500 font-display text-sm font-semibold text-white shadow-glow sm:h-12 sm:w-12">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="glass flex-1 rounded-2xl p-5 shadow-glass dark:shadow-glass-dark">
              <h3 className="font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-slate-300">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
