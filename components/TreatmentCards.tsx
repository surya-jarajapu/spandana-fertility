"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Microscope,
  Syringe,
  Activity,
  Scan,
  ClipboardCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { TREATMENTS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  FlaskConical,
  Microscope,
  Syringe,
  Activity,
  Scan,
  ClipboardCheck,
};

export default function TreatmentCards({ limit }: { limit?: number }) {
  const items = limit ? TREATMENTS.slice(0, limit) : TREATMENTS;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => {
        const Icon = ICON_MAP[t.icon] ?? FlaskConical;
        return (
          <motion.div
            key={t.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group glass relative overflow-hidden rounded-2xl p-6 shadow-glass transition-transform hover:-translate-y-1 dark:shadow-glass-dark"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-rose-500/10 to-cyan-500/10 blur-2xl transition-transform group-hover:scale-125" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 shadow-glow">
              <Icon className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{t.title}</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
              {t.short}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-slate-300">
              {t.description}
            </p>
            <Link
              href={t.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 transition-colors hover:gap-2.5 dark:text-rose-400"
            >
              Learn More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
