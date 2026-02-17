import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Sajith | Motion Graphics Portfolio",
  description: "Portfolio site for Sajith, CSE student at IIIT Raichur and Motion Graphics Designer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} bg-shell text-mist antialiased`}>
        {children}
      </body>
    </html>
  );
}