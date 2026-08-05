import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import Materiales from "@/components/sections/Materiales";

export const metadata: Metadata = {
  title: "Materiales para cercos y alambrados en Salta | Alambrar SRL",
  description:
    "Venta de tejido romboidal, alambre de púas, concertina, postes de quebracho colorado, torniquetas y ganchos tensores en Salta. Por mayor y menor, con stock permanente.",
};

export default function MaterialesPage() {
  return (
    <>
      <section className="bg-white pt-24 pb-16 md:pb-24">
        <Container>
          <FadeUp className="text-center">
            <p className="font-sans text-sm font-medium tracking-widest text-rojo uppercase">
              Materiales
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-carbon md:text-5xl">
              Venta de materiales para cercos y alambrados
            </h1>
            <p className="mt-3 font-sans text-gris-texto">
              Vendemos por mayor y menor, con stock permanente.
            </p>
          </FadeUp>
        </Container>
      </section>

      <Materiales />
    </>
  );
}
