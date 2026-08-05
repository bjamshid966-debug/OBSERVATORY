"use client";

import { motion } from "framer-motion";
import { Telescope } from "lucide-react";
import { equipment } from "@/app/data/content";

export default function Equipment() {
  return (
    <section id="jihoz" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            Optika
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-star">
            Uch teleskop, uchta vazifa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {equipment.map((eq, i) => (
            <motion.div
              key={eq.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-line rounded-2xl p-7 hover:border-nebula-dim transition-colors"
            >
              <Telescope className="text-amber mb-6" size={22} strokeWidth={1.5} />
              <h3 className="font-display italic text-2xl text-star mb-1">
                {eq.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-nebula mb-5">
                {eq.kind}
              </p>
              <dl className="space-y-2 font-mono text-xs text-star-dim mb-5">
                <div className="flex justify-between border-b border-line/60 pb-2">
                  <dt>Diametr</dt>
                  <dd className="text-star">{eq.aperture}</dd>
                </div>
                <div className="flex justify-between border-b border-line/60 pb-2">
                  <dt>Fokus</dt>
                  <dd className="text-star">{eq.focal}</dd>
                </div>
              </dl>
              <p className="text-star-dim text-sm leading-relaxed">{eq.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
