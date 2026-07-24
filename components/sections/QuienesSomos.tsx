import Container from "@/components/ui/Container";
import Placeholder from "@/components/ui/Placeholder";
import FadeUp from "@/components/ui/FadeUp";

export default function QuienesSomos() {
  return (
    <section className="bg-rojo py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <FadeUp>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Quiénes somos
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-white md:text-xl md:leading-loose">
              En Alambrar fabricamos e instalamos cercos, alambrados, portones y concertina en
              Salta y la zona. Trabajamos tanto con obras y empresas como con casas particulares,
              con fabricación propia y un servicio llave en mano: nos encargamos desde la
              medición del terreno hasta la instalación final. Nuestro objetivo es simple: que tu
              cerco quede bien hecho, a tiempo y sin que tengas que preocuparte por nada.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Placeholder label="Alambrar SRL" tone="on-dark" />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
