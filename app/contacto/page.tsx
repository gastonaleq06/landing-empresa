import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FormularioObra from "@/components/sections/FormularioObra";
import FormularioSimple from "@/components/sections/FormularioSimple";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Contacto — Alambrar SRL",
  description: "Pedí tu presupuesto o dejanos tus datos. Te respondemos a la brevedad.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-rojo py-12 md:py-16">
        <Container>
          <FadeUp>
            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl">
              Contacto
            </h1>
            <p className="mt-3 font-sans text-white/85">
              Contanos tu proyecto y te respondemos a la brevedad.
            </p>
          </FadeUp>
        </Container>
      </section>

      <FadeUp>
        <FormularioObra />
      </FadeUp>
      <FadeUp delay={0.1}>
        <FormularioSimple />
      </FadeUp>
    </>
  );
}
