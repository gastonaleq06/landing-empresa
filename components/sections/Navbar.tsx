"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/materiales", label: "Materiales" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/obras", label: "Obras" },
  { href: "/contacto", label: "Contacto" },
];

// El hover no puede bajar la opacidad del texto: text-white/80 sobre el rojo
// de marca cae a ~3.6:1 y falla AA. Se usa subrayado en vez de un rojo más claro.
const linkStyles =
  "rounded-sm text-white underline-offset-4 transition-colors duration-150 ease-out hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Costura con el Hero: se probó sacar el borde superior y dejar que el rojo
// se funda con el Hero (mismo bg-rojo-textura). El período real de la textura
// en vertical es 24*sqrt(2) ≈ 33.94px y la altura del header (65px con borde)
// no es múltiplo de eso, así que el rombo no calza y queda una junta visible.
// Por eso el border-b border-white/20 queda permanente, no solo al scrollear.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/20 bg-rojo-textura transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo variant="white" />

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-sans text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyles}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="cursor-pointer rounded-sm p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-white/20 pb-4 md:hidden">
            <ul className="flex flex-col gap-4 pt-4 font-sans text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block ${linkStyles}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
