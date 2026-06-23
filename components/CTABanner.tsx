"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function CTABanner({
  title = "Ready to start your fertility journey?",
  subtitle = "Book a consultation and get a clear, data-backed plan within your first visit.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl px-8 py-14 text-center shadow-glass dark:shadow-glass-dark sm:px-16"
        >
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-rose-500/15 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

          <h2 className="relative text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ink-600 dark:text-slate-300">
            {subtitle}
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="glass flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-ink-800 transition-transform hover:scale-[1.03] dark:text-slate-100"
            >
              <Phone className="h-4 w-4 text-rose-500" />
              {CLINIC.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
