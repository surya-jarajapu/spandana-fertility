import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TreatmentCards from "@/components/TreatmentCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best IVF Doctor in Gachibowli, Hyderabad",
  description:
    "Spandana Fertility Clinic, led by Dr. Spandana Nuthakki (MBBS, MS), offers IVF, ICSI, IUI, Laparoscopy, 3D USG and Sonoendocrinology in Gachibowli, Hyderabad.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              Our Specialities
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Treatments designed around{" "}
              <span className="gradient-text italic">your diagnosis</span>
            </h2>
          </div>
          <div className="mt-14">
            <TreatmentCards limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 px-5 py-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-500/5 dark:text-rose-400"
            >
              View All Treatments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              Patient Education
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Watch & Understand{" "}
              <span className="gradient-text italic">Your Options</span>
            </h2>
          </div>
          <div className="mt-14">
            <VideoGallery limit={3} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 px-5 py-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-500/5 dark:text-rose-400"
            >
              <PlayCircle className="h-4 w-4" />
              Watch All Videos
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
