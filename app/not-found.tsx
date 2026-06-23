import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-display text-7xl font-semibold gradient-text">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold">Page Not Found</h1>
      <p className="mt-2 max-w-sm text-ink-600 dark:text-slate-300">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-6 flex items-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-glow"
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </section>
  );
}
