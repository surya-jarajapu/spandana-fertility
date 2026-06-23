import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "ICSI Treatment in Gachibowli | Intracytoplasmic Sperm Injection",
  description:
    "ICSI (Intracytoplasmic Sperm Injection) at Spandana Fertility Clinic, Gachibowli — benefits, process, eligibility and FAQs for male-factor infertility treatment.",
  alternates: { canonical: "/icsi" },
};

const BENEFITS = [
  "Directly addresses male-factor infertility",
  "Effective even with very low sperm count or motility",
  "Higher fertilization rate in select cases vs conventional IVF",
  "Compatible with surgically retrieved sperm",
];

const PROCESS = [
  { title: "Egg Retrieval", text: "Mature eggs are retrieved following ovarian stimulation, identical to a standard IVF cycle." },
  { title: "Sperm Selection", text: "A single, healthy sperm is selected under high magnification by the embryologist." },
  { title: "Direct Injection", text: "The selected sperm is injected directly into the egg's cytoplasm using a fine micro-needle." },
  { title: "Fertilization Check", text: "Eggs are observed the next day to confirm successful fertilization." },
  { title: "Embryo Transfer", text: "Viable embryos are cultured and transferred into the uterus, as in a standard IVF cycle." },
];

const ELIGIBILITY = [
  "Low sperm count, motility, or abnormal morphology",
  "Previous fertilization failure with conventional IVF",
  "Sperm retrieved surgically (e.g. via TESA/PESA)",
  "Frozen sperm samples with limited quantity",
];

const FAQS = [
  { q: "Is ICSI different from IVF?", a: "ICSI is a specialized technique used within an IVF cycle — instead of letting sperm fertilize the egg naturally in a dish, a single sperm is injected directly into the egg." },
  { q: "Does ICSI guarantee fertilization?", a: "It significantly improves fertilization odds for male-factor cases, but does not guarantee it — egg quality also plays a role." },
  { q: "Is ICSI recommended for everyone undergoing IVF?", a: "No — it's typically recommended specifically for male-factor infertility or after failed conventional fertilization, not as a default for every cycle." },
];

export default function ICSIPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatment · ICSI"
        title="Intracytoplasmic Sperm Injection (ICSI)"
        subtitle="A precision technique where a single sperm is injected directly into the egg — the recommended path for male-factor infertility."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">What is ICSI</span>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Fertilization without leaving it to chance</h2>
            <p className="mt-5 leading-relaxed text-ink-600 dark:text-slate-300">
              ICSI is performed within an IVF cycle. Rather than placing sperm
              and egg together and waiting for natural fertilization, the
              embryologist selects a single healthy sperm and injects it
              directly into the egg under a microscope. It is the standard
              recommendation when sperm quality is the primary obstacle to
              conception.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">Benefits of ICSI</h2>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <div key={item} className="glass flex items-center gap-3 rounded-xl p-4 shadow-glass dark:shadow-glass-dark">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                <span className="text-sm font-medium text-ink-700 dark:text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">The ICSI Process</h2>
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Who Is Eligible</h2>
            <ul className="mt-6 space-y-3">
              {ELIGIBILITY.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 dark:text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-rose-500 to-cyan-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={FAQS} eyebrow="ICSI FAQs" title="Common Questions About ICSI" />
      <CTABanner
        title="Is ICSI right for your case?"
        subtitle="A semen analysis and consultation will confirm if ICSI is the right recommendation."
      />
    </>
  );
}
