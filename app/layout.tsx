import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { CLINIC } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.spandanafertility.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CLINIC.name} | ${CLINIC.tagline}`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    "Spandana Fertility Clinic in Gachibowli, Hyderabad offers IVF, ICSI, IUI, Laparoscopy, 3D USG and Sonoendocrinology under Dr. Spandana Nuthakki, MBBS, MS, Fertility Specialist.",
  keywords: [
    "IVF doctor Gachibowli",
    "fertility clinic Hyderabad",
    "Dr. Spandana Nuthakki",
    "ICSI Hyderabad",
    "IUI treatment Gachibowli",
    "best fertility specialist Hyderabad",
  ],
  authors: [{ name: CLINIC.doctor }],
  openGraph: {
    title: `${CLINIC.name} | ${CLINIC.tagline}`,
    description:
      "Premium fertility care in Gachibowli, Hyderabad — IVF, ICSI, IUI and more under Dr. Spandana Nuthakki.",
    url: siteUrl,
    siteName: CLINIC.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.name} | ${CLINIC.tagline}`,
    description:
      "Premium fertility care in Gachibowli, Hyderabad under Dr. Spandana Nuthakki.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
