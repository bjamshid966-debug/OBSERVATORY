"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { altitudeLayers } from "@/app/data/content";
import { useSkyStore } from "@/lib/store";

function LayerRow({ index }: { index: number }) {
  const layer = altitudeLayers[index];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const setActiveLayer = useSkyStore((s) => s.setActiveLayer);

  useEffect(() => {
    if (inView) setActiveLayer(index);
  }, [inView, index, setActiveLayer]);

  return (
    <div
      ref={ref}
      className="min-h-[70vh] md:min-h-[85vh] flex items-center border-t border-line"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 w-full items-baseline"
      >
        <span className="md:col-span-3 font-mono text-amber text-sm md:text-base tracking-wider">
          {layer.code}
        </span>
        <h3 className="md:col-span-4 font-display italic text-3xl md:text-5xl text-star">
          {layer.name}
        </h3>
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-wider text-nebula mb-2">
            {layer.place}
          </p>
          <p className="text-star-dim leading-relaxed max-w-md">
            {layer.text}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AltitudeJourney() {
  return (
    <section id="journey" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            Masofa jurnali
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-star">
            Yer sathidan koinot chekkasigacha
          </h2>
        </div>

        <div>
          {altitudeLayers.map((_, i) => (
            <LayerRow key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
