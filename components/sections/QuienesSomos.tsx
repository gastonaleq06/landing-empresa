import Container from "@/components/ui/Container";
import Placeholder from "@/components/ui/Placeholder";
import FadeUp from "@/components/ui/FadeUp";

export default function QuienesSomos() {
  return (
    <section className="bg-rojo-textura py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <FadeUp>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Quiénes somos
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-white md:text-xl md:leading-loose">
              Somos pioneros en Salta: hace más de 30 años que fabricamos, instalamos y vendemos
              materiales para cercos, alambrados, portones y concertina en la provincia.
              Trabajamos para casas, countries, campos, empresas e instituciones, y también para
              quien compra el material en el mostrador. Con fabricación propia en nuestra planta
              de Cerrillos y un servicio llave en mano, nos encargamos desde la medición del
              terreno hasta la instalación final.
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
