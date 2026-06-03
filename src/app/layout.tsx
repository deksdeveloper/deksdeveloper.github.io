import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "yeatdev",
  description: "Minimalist developer blog and video explorer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-inter`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
