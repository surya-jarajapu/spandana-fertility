"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name || !phone) {
      setError("Please share your name and phone number so we can reach you.");
      return;
    }

    setSubmitting(true);
    // Simulated submit — wire this up to your backend / email service.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong flex flex-col items-center justify-center rounded-2xl p-10 text-center shadow-glass dark:shadow-glass-dark"
      >
        <CheckCircle2 className="h-12 w-12 text-cyan-500" />
        <h3 className="mt-4 font-display text-xl font-semibold">Request Received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-600 dark:text-slate-300">
          Thank you for reaching out. Our care coordinator will call you within
          24 hours to schedule your consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 shadow-glass dark:shadow-glass-dark sm:p-8">
      <h3 className="font-display text-xl font-semibold">Request a Consultation</h3>
      <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
        Fill in your details and we will call you back to schedule a visit.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-slate-300">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-slate-300">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 7036146129"
                className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-slate-300">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-slate-300">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-ink-400" />
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us a little about what you're looking for..."
              className="w-full resize-none rounded-xl border border-ink-200 bg-white/60 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            />
          </div>
        </div>

        {error && <p className="text-sm text-rose-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {submitting ? "Sending..." : "Send Request"}
          {!submitting && <Send className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
