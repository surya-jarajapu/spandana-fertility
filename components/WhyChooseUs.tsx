"use client";

import { motion } from "framer-motion";
import { Microscope, HeartHandshake, ShieldCheck, TrendingUp } from "lucide-react";

const REASONS = [
  {
    icon: Microscope,
    title: "Diagnostic-First Approach",
    text: "Every plan starts with 3D USG and hormonal mapping — never a guess.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Tracked Care",
    text: "Real-time cycle monitoring keeps every step measurable and visible.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Protocols",
    text: "No two cycles are treated the same; protocols are built around you.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    text: "Costs are explained upfront, with no surprise additions mid-cycle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mesh-light dark:bg-mesh-dark" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
            Why Patients Choose Us
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A practice built around{" "}
            <span className="gradient-text italic">clarity</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center shadow-glass dark:shadow-glass-dark"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                <r.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-300">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
