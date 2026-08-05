"use client";

import { motion } from "framer-motion";
import { upcomingEvents, logEntries } from "@/app/data/content";

export default function EventsAndLog() {
  return (
    <section
      id="voqealar"
      className="px-6 md:px-10 py-24 md:py-32 border-t border-line"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            Yaqinlashayotgan
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl text-star mb-10">
            Kalendar
          </h2>
          <ul className="space-y-0 border-t border-line">
            {upcomingEvents.map((e, i) => (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-between gap-4 py-5 border-b border-line"
              >
                <div>
                  <p className="font-mono text-xs text-amber tracking-wider mb-1">
                    {e.date}
                  </p>
                  <p className="text-star">{e.title}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-nebula border border-nebula-dim rounded-full px-3 py-1 shrink-0">
                  {e.tag}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            Kuzatuv jurnali
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl text-star mb-10">
            So'nggi yozuvlar
          </h2>
          <div className="space-y-6">
            {logEntries.map((log, i) => (
              <motion.div
                key={log.date + log.object}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="font-mono text-xs border-l-2 border-nebula-dim pl-5 py-1"
              >
                <p className="text-star-dim mb-1.5">
                  {log.date} · {log.observer}
                </p>
                <p className="text-star text-sm mb-1.5 font-body">
                  {log.object}
                </p>
                <p className="text-star-dim leading-relaxed font-body">
                  {log.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
