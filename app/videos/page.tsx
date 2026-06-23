import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VideoGallery from "@/components/VideoGallery";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Patient Education Videos | Fertility Insights",
  description:
    "Watch fertility education videos from Dr. Spandana Nuthakki covering IVF, ICSI, IUI and frequently asked patient questions.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Education"
        title="Videos to Help You Understand Your Options"
        subtitle="Short, clear explanations from Dr. Spandana Nuthakki on what to expect at each stage of fertility treatment."
      />
      <section className="py-8 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <VideoGallery />
        </div>
      </section>
      <CTABanner
        title="Have questions a video can't answer?"
        subtitle="Book a one-on-one consultation for guidance specific to your situation."
      />
    </>
  );
}
