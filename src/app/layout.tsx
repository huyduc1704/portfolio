import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud & DevOps Engineer Portfolio",
  description: "Personal portfolio of a Cloud and DevOps Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <div className="bg-grid" />
        <div className="glow-spot top-left" />
        <div className="glow-spot top-right" />
        <div className="glow-spot bottom-right" />
        <div className="glow-spot center-left" />
        <div className="glow-spot center-right" />
        {children}
      </body>
    </html>
  );
}
