import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEBULA — Xususiy observatoriya",
  description:
    "Tog' cho'qqisidagi xususiy observatoriya. Quyosh, Oy, chuqur osmon va meteor yomg'irlarini professional teleskoplar orqali kuzating.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className="h-full">
      <body className="min-h-full bg-void text-star antialiased">
        {children}
      </body>
    </html>
  );
}
