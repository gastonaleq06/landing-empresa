import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import GaleriaObras from "@/components/sections/GaleriaObras";

export const metadata: Metadata = {
  title: "Obras realizadas — Alambrar SRL",
  description:
    "Conocé los proyectos de cercos, alambrados, portones y seguridad perimetral que hicimos en Salta y la zona.",
};

export default function ObrasPage() {
  return (
    <>
      <section className="bg-white pt-24 pb-16 md:pb-24">
        <Container>
          <FadeUp className="text-center">
            <p className="font-sans text-sm font-medium tracking-widest text-rojo uppercase">
              Obras
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-carbon md:text-5xl">
              Proyectos realizados
            </h1>
            <p className="mt-3 font-sans text-gris-texto">
              Algunos de los trabajos que hicimos en Salta y la zona.
            </p>
          </FadeUp>

          <div className="mt-12">
            <GaleriaObras />
          </div>

          <FadeUp className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-carbon">
              ¿Querés un trabajo así?
            </h2>
            <Button variant="primary" href="/contacto">
              Pedir presupuesto
            </Button>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
