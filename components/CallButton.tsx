"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function CallButton() {
  return (
    <motion.a
      href={`tel:${CLINIC.phoneRaw}`}
      aria-label="Call the clinic now"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-violet-500 shadow-glow md:bottom-8 md:right-8"
    >
      <Phone className="h-6 w-6 text-white" strokeWidth={2.25} aria-hidden="true" />
    </motion.a>
  );
}
