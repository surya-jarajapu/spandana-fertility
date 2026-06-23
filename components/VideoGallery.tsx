"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { VIDEOS, type VideoItem } from "@/lib/constants";

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass overflow-hidden rounded-2xl shadow-glass dark:shadow-glass-dark"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink-900 sm:aspect-video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            aria-label={`Play video: ${video.title}`}
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-glow transition-transform group-hover:scale-110">
                <PlayCircle className="h-9 w-9 text-rose-500" strokeWidth={1.5} />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold">{video.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-slate-300">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function VideoGallery({ limit }: { limit?: number }) {
  const items = limit ? VIDEOS.slice(0, limit) : VIDEOS;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((video, i) => (
        <VideoCard key={video.id} video={video} index={i} />
      ))}
    </div>
  );
}
