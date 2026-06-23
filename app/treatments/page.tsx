import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TreatmentCards from "@/components/TreatmentCards";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Fertility Treatments | IVF, ICSI, IUI & More",
  description:
    "Explore fertility treatments offered at Spandana Fertility Clinic, Gachibowli — IVF, ICSI, IUI, Laparoscopy, 3D USG, and full fertility evaluation.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Specialities"
        title="Treatments Built Around Your Diagnosis"
        subtitle="Every recommendation follows a complete diagnostic workup — explore the treatments we offer and what each one is designed to solve."
      />
      <section className="py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TreatmentCards />
        </div>
      </section>
      <CTABanner
        title="Not sure which treatment fits your case?"
        subtitle="Book a diagnostic consultation and we'll map the right path together."
      />
    </>
  );
}
