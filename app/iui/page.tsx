import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "IUI Treatment in Gachibowli | Intrauterine Insemination",
  description:
    "IUI (Intrauterine Insemination) at Spandana Fertility Clinic, Gachibowli — a gentler first-step fertility treatment. Learn the process, advantages, and candidacy.",
  alternates: { canonical: "/iui" },
};

const ADVANTAGES = [
  "Lower intervention than IVF or ICSI",
  "Significantly more affordable per cycle",
  "Minimal recovery time, same-day procedure",
  "A logical first step for mild fertility factors",
];

const PROCESS = [
  { title: "Cycle Monitoring", text: "Ovulation is tracked via 3D USG to identify the optimal window for insemination." },
  { title: "Sperm Preparation", text: "The sperm sample is washed and concentrated in the lab to isolate the healthiest, most motile sperm." },
  { title: "Insemination", text: "Prepared sperm is placed directly into the uterus using a thin catheter — a quick, painless procedure." },
  { title: "Pregnancy Test", text: "A blood test about two weeks later confirms whether the cycle was successful." },
];

const CANDIDATES = [
  "Mild male-factor infertility",
  "Unexplained infertility in early stages",
  "Cervical mucus-related conception issues",
  "Single women or same-sex couples using donor sperm",
  "Ovulatory disorders managed with medication",
];

const FAQS = [
  { q: "How many IUI cycles should I try before considering IVF?", a: "Typically 3–4 cycles are reasonable before reassessing, though this depends on age and underlying diagnosis — discussed individually." },
  { q: "Is IUI painful?", a: "It's generally described as mildly uncomfortable rather than painful, similar to a Pap smear, and takes only a few minutes." },
  { q: "What is the success rate of IUI?", a: "Success rates vary by age, diagnosis, and whether ovulation induction medication is used — your specific outlook is reviewed at consultation." },
];

export default function IUIPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatment · IUI"
        title="Intrauterine Insemination (IUI)"
        subtitle="A gentler, lower-intervention first step that places prepared sperm directly into the uterus to improve the odds of natural conception."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">What is IUI</span>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">A closer starting point, not a shortcut</h2>
            <p className="mt-5 leading-relaxed text-ink-600 dark:text-slate-300">
              IUI involves placing specially prepared sperm directly into the
              uterus around the time of ovulation, shortening the distance
              sperm needs to travel to reach the egg. It s often recommended
              as a first-line treatment for mild fertility factors before
              moving to more involved procedures like IVF or ICSI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">Advantages of IUI</h2>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ADVANTAGES.map((item) => (
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
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">The IUI Procedure</h2>
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Who Is a Good Candidate</h2>
            <ul className="mt-6 space-y-3">
              {CANDIDATES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 dark:text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-rose-500 to-cyan-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={FAQS} eyebrow="IUI FAQs" title="Common Questions About IUI" />
      <CTABanner
        title="Wondering if IUI is your right first step?"
        subtitle="A short consultation will confirm whether IUI fits your diagnosis."
      />
    </>
  );
}
