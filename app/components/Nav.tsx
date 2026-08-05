"use client";

import { useEffect, useState } from "react";
import { useSkyStore } from "@/lib/store";

const links = [
  { href: "#journey", label: "Masofa" },
  { href: "#jihoz", label: "Jihozlar" },
  { href: "#seans", label: "Seanslar" },
  { href: "#voqealar", label: "Voqealar" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const openBooking = useSkyStore((s) => s.openBooking);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.2em] text-star focus-ring"
        >
          NEBULA
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-star-dim uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-star transition-colors focus-ring"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => openBooking()}
          className="font-mono text-xs uppercase tracking-wider border border-line px-4 py-2 rounded-full hover:border-amber hover:text-amber transition-colors focus-ring"
        >
          Bron qilish
        </button>
      </nav>
    </header>
  );
}
