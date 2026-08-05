"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useSkyStore } from "@/lib/store";
import { sessionTypes } from "@/app/data/content";

export default function BookingModal() {
  const bookingOpen = useSkyStore((s) => s.bookingOpen);
  const closeBooking = useSkyStore((s) => s.closeBooking);
  const selectedSession = useSkyStore((s) => s.selectedSession);
  const [submitted, setSubmitted] = useState(false);
  const [session, setSession] = useState(selectedSession ?? sessionTypes[0].id);

  function handleClose() {
    closeBooking();
    setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <AnimatePresence>
      {bookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-void-deep/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full md:max-w-lg bg-void border border-line rounded-t-3xl md:rounded-3xl p-7 md:p-9 max-h-[88vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              aria-label="Yopish"
              className="absolute top-6 right-6 text-star-dim hover:text-star transition-colors focus-ring"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-nebula-dim/40 flex items-center justify-center">
                  <Check className="text-amber" size={24} />
                </div>
                <h3 className="font-display italic text-2xl text-star mb-3">
                  So'rov qabul qilindi
                </h3>
                <p className="text-star-dim text-sm leading-relaxed max-w-xs mx-auto">
                  Observatoriya jamoasi 24 soat ichida bog'lanadi va aniq
                  sanani osmon sharoitiga qarab kelishadi.
                </p>
              </div>
            ) : (
              <>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-3">
                  Bron so'rovi
                </p>
                <h3 className="font-display italic text-2xl md:text-3xl text-star mb-7">
                  Kuzatuv seansini tanlang
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-star-dim mb-2">
                      Seans turi
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {sessionTypes.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => setSession(s.id)}
                          className={`text-left px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus-ring ${
                            session === s.id
                              ? "border-amber text-star bg-amber/5"
                              : "border-line text-star-dim hover:border-nebula-dim"
                          }`}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="fullname"
                      className="block font-mono text-[11px] uppercase tracking-wider text-star-dim mb-2"
                    >
                      Ismingiz
                    </label>
                    <input
                      id="fullname"
                      required
                      type="text"
                      placeholder="Ism Familiya"
                      className="w-full bg-transparent border border-line rounded-xl px-4 py-3 text-star placeholder:text-star-dim/60 focus-ring outline-none focus:border-nebula"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-mono text-[11px] uppercase tracking-wider text-star-dim mb-2"
                    >
                      Telefon raqami
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      placeholder="+998 90 000 00 00"
                      className="w-full bg-transparent border border-line rounded-xl px-4 py-3 text-star placeholder:text-star-dim/60 focus-ring outline-none focus:border-nebula"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block font-mono text-[11px] uppercase tracking-wider text-star-dim mb-2"
                    >
                      Kishilar soni
                    </label>
                    <input
                      id="guests"
                      type="number"
                      min={1}
                      max={12}
                      defaultValue={2}
                      className="w-full bg-transparent border border-line rounded-xl px-4 py-3 text-star focus-ring outline-none focus:border-nebula"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-mono text-xs uppercase tracking-wider bg-star text-void px-6 py-4 rounded-xl hover:bg-amber transition-colors focus-ring mt-2"
                  >
                    So'rovni yuborish
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
