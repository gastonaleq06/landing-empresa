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
  title: "Alambrar SRL — Fábrica, cercos y materiales, Salta",
  description:
    "Fabricamos, instalamos y vendemos materiales para cercos en Salta. Más de 30 años de trayectoria, con planta propia en Cerrillos.",
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
