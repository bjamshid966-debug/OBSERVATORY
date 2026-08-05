"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sessionTypes } from "@/app/data/content";
import { useSkyStore } from "@/lib/store";

export default function Sessions() {
  const openBooking = useSkyStore((s) => s.openBooking);

  return (
    <section id="seans" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            Seanslar
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-star">
            Har bir osmon jismi — o'z vaqtida
          </h2>
        </div>

        <div className="divide-y divide-line border-t border-b border-line">
          {sessionTypes.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => openBooking(s.id)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="w-full text-left grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center py-7 group hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg focus-ring"
            >
              <h3 className="md:col-span-3 font-display italic text-2xl md:text-3xl text-star">
                {s.title}
              </h3>
              <p className="md:col-span-5 text-star-dim text-sm leading-relaxed">
                {s.desc}
              </p>
              <p className="md:col-span-2 font-mono text-xs text-nebula uppercase tracking-wider">
                {s.time} · {s.duration}
              </p>
              <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3">
                <span className="font-mono text-xs text-star-dim uppercase tracking-wider">
                  {s.detail}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-star-dim group-hover:text-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
