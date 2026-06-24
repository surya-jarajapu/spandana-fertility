"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS, CLINIC } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [specOpen, setSpecOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-1.5" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
            scrolled
              ? "glass-strong bg-white/90 backdrop-blur-xl border border-white/20 shadow-glass dark:bg-slate-900/90"
              : "bg-transparent",
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 via-violet-500 to-cyan-500 text-sm font-display font-semibold text-white">
              S
            </span>
            <span className="font-display text-lg font-semibold leading-none tracking-tight">
              Spandana
              <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.18em] text-rose-500">
                Fertility Clinic
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSpecOpen(true)}
                  onMouseLeave={() => setSpecOpen(false)}
                >
                  <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-800 transition-colors hover:text-rose-500 dark:text-slate-200 dark:hover:text-rose-400">
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <AnimatePresence>
                    {specOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="glass-strong absolute left-0 top-full mt-1 w-44 overflow-hidden rounded-xl p-1.5 shadow-glass dark:shadow-glass-dark"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-800 transition-colors hover:bg-rose-500/10 hover:text-rose-500 dark:text-slate-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-rose-500 dark:hover:text-rose-400",
                    pathname === link.href
                      ? "text-rose-500 dark:text-rose-400"
                      : "text-ink-800 dark:text-slate-200",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                aria-label="Toggle dark mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 dark:text-slate-300 dark:hover:bg-white/10"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-br from-rose-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] sm:flex"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book Now
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 dark:text-slate-200 lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl shadow-glass dark:shadow-glass-dark lg:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {NAV_LINKS.flatMap((link) =>
                  link.children ? [link, ...link.children] : [link],
                ).map((link) => (
                  <Link
                    key={link.label + link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:bg-rose-500/10 hover:text-rose-500 dark:text-slate-200"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-rose-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
