import type { Metadata } from "next";
import { CheckCircle2, FlaskConical, TrendingUp, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "IVF Treatment in Gachibowli | In Vitro Fertilization",
  description:
    "Comprehensive IVF (In Vitro Fertilization) treatment at Spandana Fertility Clinic, Gachibowli — process, benefits, eligibility and success factors explained by Dr. Spandana Nuthakki.",
  alternates: { canonical: "/ivf" },
  openGraph: {
    title: "IVF Treatment in Gachibowli | Spandana Fertility Clinic",
    description:
      "Comprehensive IVF treatment — process, benefits, and success factors explained.",
  },
};

const WHO_NEEDS = [
  "Blocked or damaged fallopian tubes",
  "Severe male-factor infertility",
  "Diminished ovarian reserve",
  "Unexplained infertility after other treatments",
  "Endometriosis affecting conception",
  "Failed IUI cycles",
];

const BENEFITS = [
  { icon: TrendingUp, title: "Higher Success Rate", text: "The highest per-cycle success rate among assisted reproduction options for most diagnoses." },
  { icon: FlaskConical, title: "Lab-Controlled Fertilization", text: "Fertilization happens under direct observation, removing several points of biological uncertainty." },
  { icon: Users, title: "Donor & Surrogacy Compatible", text: "IVF is the foundation for donor egg, donor sperm, and gestational surrogacy pathways when needed." },
];

const PROCESS = [
  { title: "Ovarian Stimulation", text: "Hormonal medication stimulates the ovaries to produce multiple mature eggs, monitored via 3D USG." },
  { title: "Egg Retrieval", text: "A short, minimally invasive procedure retrieves the mature eggs under sedation." },
  { title: "Fertilization", text: "Eggs are fertilized with sperm in the lab — either conventionally or via ICSI if indicated." },
  { title: "Embryo Culture", text: "Fertilized embryos are cultured and monitored for 3–5 days to assess development quality." },
  { title: "Embryo Transfer", text: "The healthiest embryo is transferred into the uterus in a quick, painless outpatient procedure." },
  { title: "Pregnancy Confirmation", text: "A blood test roughly two weeks later confirms whether implantation was successful." },
];

const SUCCESS_FACTORS = [
  "Age and ovarian reserve at the time of treatment",
  "Embryo quality graded through lab observation",
  "Endometrial receptivity, assessed via 3D USG",
  "Underlying cause of infertility being addressed directly",
  "Precision of hormonal monitoring throughout the cycle",
];

const FAQS = [
  { q: "How many IVF cycles does it usually take?", a: "Many patients conceive within 1–3 cycles, though this varies significantly by age and diagnosis. Your specific outlook is discussed after the initial evaluation." },
  { q: "Is IVF painful?", a: "Most steps are minimally invasive. Egg retrieval is done under sedation, and embryo transfer is generally painless and quick." },
  { q: "What is the success rate of IVF?", a: "Success rates depend heavily on age, ovarian reserve, and the underlying cause of infertility — this is reviewed individually rather than quoted as a single number." },
  { q: "Can IVF be combined with ICSI?", a: "Yes. ICSI is often used within an IVF cycle specifically for male-factor infertility or previous fertilization failure." },
];

export default function IVFPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatment · IVF"
        title="In Vitro Fertilization (IVF)"
        subtitle="A lab-based fertilization process designed for a wide range of fertility challenges, monitored at every stage with precision diagnostics."
      />

      {/* What is IVF */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">What is IVF</span>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Fertilization, observed and controlled</h2>
            <p className="mt-5 leading-relaxed text-ink-600 dark:text-slate-300">
              In Vitro Fertilization (IVF) is a process where eggs are retrieved
              from the ovaries and fertilized with sperm in a controlled laboratory
              setting, rather than inside the body. The resulting embryo is then
              transferred into the uterus to establish pregnancy. It remains one
              of the most effective and widely used assisted reproduction methods
              for a broad range of fertility diagnoses.
            </p>
          </div>
        </div>
      </section>

      {/* Who needs IVF */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">Who Needs IVF</h2>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHO_NEEDS.map((item) => (
              <div key={item} className="glass flex items-center gap-3 rounded-xl p-4 shadow-glass dark:shadow-glass-dark">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                <span className="text-sm font-medium text-ink-700 dark:text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">Benefits of IVF</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="glass rounded-2xl p-6 shadow-glass dark:shadow-glass-dark">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-violet-500">
                  <b.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-300">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">The IVF Process, Step by Step</h2>
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">What Influences Success</h2>
            <ul className="mt-6 space-y-3">
              {SUCCESS_FACTORS.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 dark:text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-rose-500 to-cyan-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={FAQS} eyebrow="IVF FAQs" title="Common Questions About IVF" />
      <CTABanner
        title="Considering IVF?"
        subtitle="Book a diagnostic consultation to understand if IVF is the right path for your case."
      />
    </>
  );
}
