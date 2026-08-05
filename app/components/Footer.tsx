"use client";

import { useSkyStore } from "@/lib/store";

export default function Footer() {
  const openBooking = useSkyStore((s) => s.openBooking);

  return (
    <footer className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            Tayyormisiz?
          </p>
          <h2 className="font-display italic text-4xl md:text-6xl text-star mb-8 leading-[1.05]">
            Bugun kechqurun osmon tiniq.
          </h2>
          <button
            onClick={() => openBooking()}
            className="font-mono text-xs uppercase tracking-wider bg-star text-void px-7 py-4 rounded-full hover:bg-amber transition-colors focus-ring"
          >
            Kuzatuv seansini bron qiling
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 pt-10 border-t border-line font-mono text-xs text-star-dim">
          <p>NEBULA OBSERVATORIYASI · Chotqol tizmasi, O'zbekiston</p>
          <p>Bortle 2 osmon sinfi · 2 840 m balandlik</p>
        </div>
      </div>
    </footer>
  );
}
