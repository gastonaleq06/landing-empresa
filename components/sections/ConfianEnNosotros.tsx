import Container from "@/components/ui/Container";
import Carousel from "@/components/ui/Carousel";
import Placeholder from "@/components/ui/Placeholder";
import FadeUp from "@/components/ui/FadeUp";

// Reemplazar cada entrada por el logo real (imagen) cuando esté disponible.
const CLIENTES = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
  "Cliente 6",
  "Cliente 7",
  "Cliente 8",
];

export default function ConfianEnNosotros() {
  return (
    <section className="bg-fondo-claro py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-carbon md:text-4xl">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-3 text-center font-sans text-gris-texto">
            Trabajamos con empresas y obras de toda la provincia.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-10">
          <Carousel
            ariaLabel="Empresas que confían en Alambrar SRL"
            itemClassName="w-[45%] shrink-0 sm:w-[30%] md:w-[22%] lg:w-[16%]"
          >
            {CLIENTES.map((cliente) => (
              <div
                key={cliente}
                className="flex h-24 items-center justify-center rounded-xl border-[0.5px] border-carbon/20 bg-white p-4"
              >
                <Placeholder tone="plain" aspect="full" label={cliente} className="h-full" />
              </div>
            ))}
          </Carousel>
        </FadeUp>
      </Container>
    </section>
  );
}
