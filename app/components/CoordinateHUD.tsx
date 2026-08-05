"use client";

import { useEffect, useState } from "react";
import { useSkyStore } from "@/lib/store";
import { altitudeLayers } from "@/app/data/content";

function formatRA(progress: number) {
  const totalSeconds = Math.floor(progress * 24 * 3600);
  const h = Math.floor(totalSeconds / 3600) % 24;
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${String(h).padStart(2, "0")}h ${String(m).padStart(
    2,
    "0"
  )}m ${String(s).padStart(2, "0")}s`;
}

function formatDec(progress: number) {
  const deg = -90 + progress * 180;
  const abs = Math.abs(deg);
  const d = Math.floor(abs);
  const m = Math.floor((abs - d) * 60);
  return `${deg >= 0 ? "+" : "-"}${String(d).padStart(2, "0")}° ${String(
    m
  ).padStart(2, "0")}'`;
}

export default function CoordinateHUD() {
  const progress = useSkyStore((s) => s.progress);
  const activeLayer = useSkyStore((s) => s.activeLayer);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const layer = altitudeLayers[Math.min(activeLayer, altitudeLayers.length - 1)];

  return (
    <div className="fixed bottom-5 right-5 z-30 hidden lg:flex flex-col items-end gap-1 font-mono text-[11px] text-star-dim pointer-events-none select-none">
      <div className="flex gap-4 bg-void/60 backdrop-blur-sm px-3 py-2 rounded border border-line">
        <span>RA {formatRA(progress)}</span>
        <span>DEC {formatDec(progress)}</span>
      </div>
      <div className="bg-void/60 backdrop-blur-sm px-3 py-1.5 rounded border border-line uppercase tracking-wider text-amber">
        {layer?.code} · {layer?.name}
      </div>
    </div>
  );
}
