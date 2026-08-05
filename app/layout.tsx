import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alambrar SRL — Cercos, alambrados y portones en Salta",
  description:
    "Alambrar SRL: fabricación e instalación de cercos, alambrados, portones y concertina en Salta, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-white text-carbon font-sans antialiased">
        <LocalBusinessJsonLd />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
