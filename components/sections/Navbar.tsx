"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/obras", label: "Obras" },
  { href: "/contacto", label: "Contacto" },
];

const linkStyles =
  "rounded-sm text-rojo transition-colors duration-150 ease-out hover:text-rojo-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo";

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
      className={`sticky top-0 z-50 border-b border-carbon/10 bg-white transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo variant="rojo" />

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
            className="cursor-pointer rounded-sm p-2 text-rojo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-carbon/10 pb-4 md:hidden">
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
