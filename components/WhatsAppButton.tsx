"use client";

import { motion } from "framer-motion";
import { CLINIC } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'd like to book a consultation at Spandana Fertility Clinic."
  );

  return (
    <motion.a
      href={`https://wa.me/${CLINIC.whatsappRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-glass-dark md:bottom-8 md:left-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-slow" />
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="relative h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.57 3.74 1.55 5.27L2 22l4.97-1.64a9.87 9.87 0 0 0 5.07 1.38c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.06c-1.6 0-3.1-.43-4.4-1.24l-.31-.19-3.27 1.08 1.07-3.19-.21-.33a8.07 8.07 0 0 1-1.27-4.37c0-4.47 3.64-8.1 8.1-8.1a8.07 8.07 0 0 1 8.1 8.1c.01 4.47-3.63 8.24-8.81 8.24zm4.42-6.07c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.11-.49.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.04-.45-.08-.12-.5-1.2-.68-1.65-.18-.43-.37-.37-.51-.38-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.3-.21.24-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.11.15 1.55 2.37 3.76 3.23 1.87.74 2.25.59 2.66.55.41-.04 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </motion.a>
  );
}
