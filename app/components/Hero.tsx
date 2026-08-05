"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useSkyStore } from "@/lib/store";

export default function Hero() {
  const openBooking = useSkyStore((s) => s.openBooking);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-6"
        >
          41.2° N · 2 840 m balandlik
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display italic text-[13vw] sm:text-[9vw] md:text-[6.5vw] leading-[0.95] text-gradient max-w-5xl"
        >
          Osmon sizni
          <br />
          kutmoqda.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-xl text-star-dim text-base md:text-lg leading-relaxed"
        >
          Shahar yorug'ligidan uzoqdagi tog' cho'qqisida joylashgan xususiy
          observatoriya. Quyoshdan tortib 2.5 million yorug'lik yili
          uzoqlikdagi Andromeda galaktikasigacha — professional teleskoplar
          orqali haqiqiy koinotni ko'ring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => openBooking()}
            className="font-mono text-xs uppercase tracking-wider bg-star text-void px-6 py-3.5 rounded-full hover:bg-amber transition-colors focus-ring"
          >
            Kuzatuv seansini bron qiling
          </button>
          <a
            href="#journey"
            className="font-mono text-xs uppercase tracking-wider text-star-dim hover:text-star transition-colors focus-ring flex items-center gap-2"
          >
            Masofani his qiling
            <ChevronDown size={14} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-star-dim/50"
        aria-hidden="true"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
