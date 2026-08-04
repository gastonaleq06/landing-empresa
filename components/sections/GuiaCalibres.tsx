import { Dog, Grid3x3, MessageCircle, Sprout } from "lucide-react";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const CALIBRES = [
  {
    icon: <Dog size={22} aria-hidden="true" />,
    title: "Calibre 12",
    description:
      "Máxima seguridad. Cerramientos hogareños, industriales y canchas deportivas, o si tenés perros grandes y movedizos.",
  },
  {
    icon: <Grid3x3 size={22} aria-hidden="true" />,
    title: "Calibre 13",
    description:
      "El estándar que usamos en casi todas nuestras obras. Malla 2½\" × 13: el punto medio entre resistencia y precio.",
  },
  {
    icon: <Sprout size={22} aria-hidden="true" />,
    title: "Calibre 14",
    description:
      "Liviano y económico. Patios internos, huertas y mascotas chicas.",
  },
];

export default function GuiaCalibres() {
  const whatsappVentas = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_VENTAS ?? "");

  return (
    <section id="calibres" className="bg-white py-16 md:py-24">
      <Container>
        <FadeUp>
          <p className="text-center font-sans text-sm font-medium tracking-widest text-rojo uppercase">
            Guía rápida
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-semibold text-carbon md:text-4xl">
            ¿Qué calibre de tejido necesitás?
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CALIBRES.map((calibre, index) => (
            <FadeUp key={calibre.title} delay={index * 0.1}>
              <FeatureCard
                icon={calibre.icon}
                title={calibre.title}
                description={calibre.description}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-gris-texto">
            ¿Seguís con dudas sobre cuál se adapta mejor a tu terreno?
          </p>
          <Button
            variant="primary"
            href={whatsappVentas}
            icon={<MessageCircle size={20} aria-hidden="true" />}
          >
            Consultanos por WhatsApp
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
