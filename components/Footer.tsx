import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CLINIC, NAV_LINKS, SPECIALTIES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-100 bg-white dark:border-white/5 dark:bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 via-violet-500 to-cyan-500 text-sm font-display font-semibold text-white">
                S
              </span>
              <span className="font-display text-lg font-semibold">
                {CLINIC.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-slate-400">
              Precision fertility care under {CLINIC.doctor}, {CLINIC.qualification}.
              Evidence-led treatment, transparent guidance, and a team that
              treats every cycle as singular.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SPECIALTIES.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink-100 px-3 py-1 text-xs font-medium text-ink-600 dark:border-white/10 dark:text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-slate-100">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-500 transition-colors hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-slate-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-500 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                {CLINIC.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-rose-500" />
                <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-rose-500">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-rose-500" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-rose-500">
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-rose-500" />
                {CLINIC.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-6 text-xs text-ink-400 dark:border-white/5 dark:text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Designed for clarity, built for trust.</p>
        </div>
      </div>
    </footer>
  );
}
