"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Stethoscope } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import Image from "next/image";

const CREDENTIALS = [
  { icon: GraduationCap, label: "MBBS, MS" },
  { icon: Stethoscope, label: "Fertility Specialist" },
  { icon: Award, label: "10+ Years Practice" },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5"
          >
            {/* Main Card */}
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-[32px] border border-white/40 bg-white/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-slate-900/70">
                {/* Doctor Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <Image
                    src="/doctor.jpg"
                    alt={CLINIC.doctor}
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Doctor Info */}
                <div className="absolute bottom-24 left-8 right-8 rounded-3xl border border-white/50 bg-white/85 p-5 shadow-xl backdrop-blur-xl">
                  <h3 className="font-display text-2xl font-semibold text-slate-900">
                    {CLINIC.doctor}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {CLINIC.qualification}
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="mt-4 rounded-[28px] border border-white/50 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-4">
                  {CREDENTIALS.map((item) => (
                    <div key={item.label} className="text-center">
                      <item.icon className="mx-auto h-6 w-6 text-rose-500" />
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              About the Practice
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Care built on{" "}
              <span className="gradient-text italic">precision</span>, not
              promises
            </h2>
            <p className="mt-5 leading-relaxed text-ink-600 dark:text-slate-300">
              {CLINIC.doctor} brings over a decade of focused fertility practice
              to Gachibowli, combining advanced reproductive technology with a
              diagnostic-first philosophy. Every treatment plan begins with data
              — hormonal profiling, 3D imaging, and a clear read of what your
              body actually needs — before a single procedure is recommended.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600 dark:text-slate-300">
              The result is a practice patients describe as honest, unhurried,
              and genuinely invested in outcomes rather than cycle counts.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-rose-500/30 px-5 py-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-500/5 dark:text-rose-400"
            >
              Read Full Profile
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
