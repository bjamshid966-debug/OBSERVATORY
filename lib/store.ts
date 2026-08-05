import { create } from "zustand";

interface SkyState {
  progress: number; // 0..1 overall scroll progress
  activeLayer: number;
  bookingOpen: boolean;
  selectedSession: string | null;
  setProgress: (p: number) => void;
  setActiveLayer: (i: number) => void;
  openBooking: (sessionId?: string) => void;
  closeBooking: () => void;
}

export const useSkyStore = create<SkyState>((set) => ({
  progress: 0,
  activeLayer: 0,
  bookingOpen: false,
  selectedSession: null,
  setProgress: (p) => set({ progress: p }),
  setActiveLayer: (i) => set({ activeLayer: i }),
  openBooking: (sessionId) =>
    set({ bookingOpen: true, selectedSession: sessionId ?? null }),
  closeBooking: () => set({ bookingOpen: false }),
}));
