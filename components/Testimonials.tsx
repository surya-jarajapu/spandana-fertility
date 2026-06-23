"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
            Patient Outcomes
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Stories from{" "}
            <span className="gradient-text italic">families we have helped</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass relative flex flex-col rounded-2xl p-6 shadow-glass dark:shadow-glass-dark"
            >
              <Quote className="h-7 w-7 text-rose-500/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700 dark:text-slate-200">
                {t.text}
              </p>
              <div className="mt-5 border-t border-ink-100 pt-4 dark:border-white/10">
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-cyan-600 dark:text-cyan-400">{t.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
