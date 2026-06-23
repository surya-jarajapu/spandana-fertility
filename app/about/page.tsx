import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import ProcessTimeline from "@/components/ProcessTimeline";
import {
  GraduationCap,
  Award,
  Stethoscope,
  Microscope,
  HeartHandshake,
} from "lucide-react";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dr. Spandana Nuthakki | Fertility Specialist",
  description:
    "Learn about Dr. Spandana Nuthakki, MBBS, MS, Fertility Specialist at Spandana Fertility Clinic, Gachibowli — her qualifications, expertise, achievements and approach to care.",
  alternates: { canonical: "/about" },
};

const QUALIFICATIONS = [
  { icon: GraduationCap, title: "MBBS", text: "Foundational medical degree with distinction." },
  { icon: Stethoscope, title: "MS (Obstetrics & Gynaecology)", text: "Specialised surgical and clinical training in reproductive health." },
  { icon: Award, title: "Fertility Specialist Certification", text: "Advanced training in assisted reproductive technologies." },
];

const EXPERTISE = [
  "In Vitro Fertilization (IVF)",
  "Intracytoplasmic Sperm Injection (ICSI)",
  "Intrauterine Insemination (IUI)",
  "Diagnostic & Operative Laparoscopy",
  "3D Ultrasonography",
  "Sonoendocrinology & Hormonal Diagnostics",
];

const ACHIEVEMENTS = [
  { title: "5000+ Families Guided", text: "A decade-plus track record across a wide range of fertility diagnoses." },
  { title: "95% Patient Satisfaction", text: "Consistently rated for clarity, empathy, and clinical precision." },
  { title: "10+ Years in Practice", text: "Deep specialisation exclusively in reproductive medicine." },
];

const TIMELINE = [
  { title: "Medical Foundation", text: "Completed MBBS with a focus on women's health and reproductive physiology." },
  { title: "Specialist Training", text: "Pursued MS in Obstetrics & Gynaecology, training in advanced surgical techniques." },
  { title: "Fertility Specialisation", text: "Trained extensively in IVF, ICSI and reproductive endocrinology." },
  { title: "Independent Practice", text: "Founded Spandana Fertility Clinic in Gachibowli to deliver diagnostic-first fertility care." },
  { title: "Continued Growth", text: "Over a decade of practice refining protocols around patient outcomes and transparency." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Doctor"
        title={CLINIC.doctor}
        subtitle={`${CLINIC.qualification} — building a fertility practice in Gachibowli grounded in precision, transparency, and patient-first care.`}
      />

      {/* Biography */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 shadow-glass dark:shadow-glass-dark sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              Biography
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              A career built on listening first
            </h2>
            <p className="mt-5 leading-relaxed text-ink-600 dark:text-slate-300">
              {CLINIC.doctor} has spent over a decade focused exclusively on
              reproductive medicine, building Spandana Fertility Clinic into one of
              Gachibowli most trusted names in fertility care. Her approach is
              rooted in a simple principle: no treatment should be recommended
              before the underlying cause is properly understood.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600 dark:text-slate-300">
              That philosophy shows up in every consultation — comprehensive
              diagnostics before any procedure, plain-language explanations of
              every option, and treatment plans calibrated to each patients
              specific physiology rather than a one-size-fits-all protocol.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
            Qualifications
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {QUALIFICATIONS.map((q) => (
              <div key={q.title} className="glass rounded-2xl p-6 text-center shadow-glass dark:shadow-glass-dark">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-violet-500">
                  <q.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-300">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
                Areas of Expertise
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Specialised across the full fertility spectrum
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600 dark:text-slate-300">
                From the least invasive interventions to advanced lab-based
                procedures, every option is approached with the same rigor.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 shadow-glass dark:shadow-glass-dark">
              <ul className="space-y-3">
                {EXPERTISE.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink-700 dark:text-slate-200">
                    <Microscope className="h-4 w-4 flex-shrink-0 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
            Achievements
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="glass rounded-2xl p-6 shadow-glass dark:shadow-glass-dark">
                <Award className="h-6 w-6 text-rose-500" />
                <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-300">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
            Professional Timeline
          </h2>
          <div className="mt-12">
            <ProcessTimeline steps={TIMELINE} />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center shadow-glass dark:shadow-glass-dark sm:p-12">
            <HeartHandshake className="mx-auto h-9 w-9 text-rose-500" />
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              Mission Statement
            </span>
            <p className="mx-auto mt-4 max-w-2xl text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl">
              To make fertility care honest, data-driven, and genuinely
              centred on the people living through it — one diagnosis,
              one plan, one family at a time.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
