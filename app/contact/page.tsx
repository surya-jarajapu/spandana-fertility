import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Book a Fertility Consultation",
  description:
    "Get in touch with Spandana Fertility Clinic in Gachibowli, Hyderabad. Call, WhatsApp, or fill the contact form to book your consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    CLINIC.mapsEmbedQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Book Your Consultation"
        subtitle="Reach out by phone, WhatsApp, or the form below — our team responds within 24 hours."
      />

      <section className="py-8 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ContactForm />

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 shadow-glass dark:shadow-glass-dark">
                <h3 className="font-display text-lg font-semibold">Clinic Information</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500" />
                    <span className="text-ink-600 dark:text-slate-300">{CLINIC.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-rose-500" />
                    <a href={`tel:${CLINIC.phoneRaw}`} className="text-ink-600 hover:text-rose-500 dark:text-slate-300">
                      {CLINIC.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 flex-shrink-0 text-rose-500" />
                    <span className="text-ink-600 dark:text-slate-300">{CLINIC.whatsapp} (WhatsApp)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-rose-500" />
                    <a href={`mailto:${CLINIC.email}`} className="text-ink-600 hover:text-rose-500 dark:text-slate-300">
                      {CLINIC.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-rose-500" />
                    <span className="text-ink-600 dark:text-slate-300">{CLINIC.hours}</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${CLINIC.phoneRaw}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-glow"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${CLINIC.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="glass overflow-hidden rounded-2xl shadow-glass dark:shadow-glass-dark">
                <iframe
                  title="Clinic location map"
                  src={mapsEmbedSrc}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
