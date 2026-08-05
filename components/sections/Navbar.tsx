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

// Header superpuesto (fixed) sobre el Hero: arriba de todo queda transparente
// y deja ver la textura de rombos del propio Hero (una sola capa, sin costura
// posible). Recién toma fondo sólido bg-rojo cuando el centinela de Hero.tsx
// sale de la vista. En páginas sin Hero no hay centinela: isScrolled arranca
// en true y se queda así, así que el header siempre se ve sólido y legible.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    // rootMargin corta la línea de disparo a la altura del header (64px = h-16)
    // en vez de usar el viewport completo: si el Hero mide más que la pantalla,
    // el centinela empieza fuera de vista y con el viewport crudo nunca
    // "intersecta". El margen inferior gigante lo compensa.
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 9999px 0px" },
    );
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-[250ms] ease-out ${
        solid
          ? "border-white/12 bg-rojo-textura shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div
            aria-hidden={!solid}
            inert={!solid}
            className={`transition-[opacity,transform] duration-[250ms] ease-out motion-reduce:transition-opacity ${
              solid
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0 motion-reduce:translate-y-0"
            }`}
          >
            <Logo variant="white" />
          </div>

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
