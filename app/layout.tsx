// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Burleydds Dentistry",
  description:
    "Burleydds Dentistry provides a relaxing, patient-first dental experience across Cincinnati, Batavia, and Lebanon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Offline-safe: no next/font/google so build works without network */}
      <body className="flex min-h-screen flex-col bg-[color:var(--off-white)] text-[color:var(--text-dark)] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
