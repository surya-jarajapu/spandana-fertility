"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Heart,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { SPECIALTIES, STATS, CLINIC } from "@/lib/constants";
import Image from "next/image";

function StatRing({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const pct =
    suffix === "%" ? value : suffix === "+" && value <= 12 ? value * 8 : 78;
  const circumference = 2 * Math.PI * 26;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass flex items-center gap-3 rounded-2xl p-4 shadow-glass dark:shadow-glass-dark"
    >
      <div className="relative h-14 w-14 flex-shrink-0">
        <svg viewBox="0 0 60 60" className="h-14 w-14 -rotate-90">
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-ink-100 dark:text-white/10"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="url(#statGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2, duration: 1.2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient
              id="statGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#D6336C" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-[11px] font-semibold">
          {suffix === "%"
            ? `${value}%`
            : `${value >= 1000 ? `${value / 1000}k` : value}${suffix}`}
        </span>
      </div>
      <div>
        <p className="font-display text-lg font-semibold leading-none">
          {value >= 1000 ? `${value / 1000}k${suffix}` : `${value}${suffix}`}
        </p>
        <p className="text-xs text-ink-500 dark:text-slate-400">{label}</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-8 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-mesh-light dark:bg-mesh-dark" />
      <div className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl" />
      <div className="absolute -right-24 top-40 -z-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 px-3.5 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400">
              <Sparkles className="h-3.5 w-3.5" />
              Gachibowli Trusted Fertility Practice
            </span>

            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Consult the{" "}
              <span className="gradient-text italic">Best IVF Doctor</span> in
              Gachibowli
            </h1>

            <p className="mt-5 font-display text-xl font-medium text-ink-700 dark:text-slate-200">
              {CLINIC.doctor}
            </p>
            <p className="text-sm text-ink-500 dark:text-slate-400">
              {CLINIC.qualification}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {SPECIALTIES.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="glass relative overflow-hidden rounded-full px-3.5 py-1.5 text-xs font-semibold text-ink-700 dark:text-slate-200"
                >
                  <span className="relative z-10">{s}</span>
                  <span className="absolute inset-0 -z-0 animate-pulse-slow bg-gradient-to-r from-rose-500/10 via-violet-500/10 to-cyan-500/10" />
                </motion.span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
              <Link
                href="/videos"
                className="glass flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-ink-800 transition-transform hover:scale-[1.03] dark:text-slate-100"
              >
                <PlayCircle className="h-4 w-4 text-rose-500" />
                Watch Videos
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <StatRing
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={0.5 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: signature "live monitor" glass panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/hero-couple.jpg"
                alt="Happy Family"
                width={900}
                height={1000}
                priority
                className="aspect-[4/5] w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Bottom Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="glass rounded-2xl p-4 text-center">
                    <p className="font-display text-2xl font-bold text-white">
                      95%
                    </p>
                    <p className="text-xs text-white/80">Success Rate</p>
                  </div>

                  <div className="glass rounded-2xl p-4 text-center">
                    <p className="font-display text-2xl font-bold text-white">
                      5000+
                    </p>
                    <p className="text-xs text-white/80">Families</p>
                  </div>

                  <div className="glass rounded-2xl p-4 text-center">
                    <p className="font-display text-2xl font-bold text-white">
                      10+
                    </p>
                    <p className="text-xs text-white/80">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
