import { DoorOpen, Fence, Grid3x3, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const SERVICIOS = [
  {
    icon: <Grid3x3 size={24} aria-hidden="true" />,
    title: "Alambrados y tejido",
    description:
      "Tejido romboidal de fabricación propia en distintas alturas y calibres. Símil ligustrina, revestido en PVC y galvanizado.",
  },
  {
    icon: <DoorOpen size={24} aria-hidden="true" />,
    title: "Portones y cercos a medida",
    description:
      "Portones de caño estructural (línea económica y reforzada), cercos de piscina y soluciones a medida.",
  },
  {
    icon: <Fence size={24} aria-hidden="true" />,
    title: "Concertina y seguridad",
    description:
      "Colocación de concertina y cercos de seguridad perimetral para obras, empresas y hogares.",
  },
];

export default function Servicios() {
  const whatsapp = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP ?? "");

  return (
    <section id="servicios" className="bg-rojo-textura py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-white md:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-3 text-center font-sans text-white/80">
            Soluciones completas para tu proyecto de cercado y seguridad.
          </p>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICIOS.map((servicio, index) => (
            <FadeUp key={servicio.title} delay={index * 0.1}>
              <FeatureCard
                icon={servicio.icon}
                title={servicio.title}
                description={servicio.description}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex flex-col items-center gap-3">
          <p className="font-sans text-white/90">¿No sabés qué necesitás? Escribinos</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="white"
              href={whatsapp}
              icon={<MessageCircle size={20} aria-hidden="true" />}
            >
              Escribinos por WhatsApp
            </Button>
            <Button variant="outline-white" href="/obras">
              Ver nuestras obras
            </Button>
          </div>
        </FadeUp>

        <FadeUp
          delay={0.15}
          className="mt-12 flex flex-col items-center gap-3 border-t border-white/20 pt-10 text-center"
        >
          <p className="font-sans text-white">
            También vendemos los materiales por mayor y menor, con stock permanente.
          </p>
          <Button variant="outline-white" href="/materiales">
            Ver materiales
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
