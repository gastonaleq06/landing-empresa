import type { ReactNode } from "react";
import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Set these once the photos are ready — see README notes for how to add them.
// Foto de Unsplash, provisoria — reemplazar por una foto real de la fábrica
// de Alambrar en Cerrillos cuando el cliente la entregue.
const IMAGEN_FABRICA: string | undefined = "/hero-tejido-provisorio.jpg";
const IMAGEN_INSTALACION: string | undefined = undefined;
const IMAGEN_MATERIALES: string | undefined = undefined;

interface PilarCardProps {
  imagen?: string;
  imagenAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  size?: "normal" | "large";
  children: ReactNode;
}

function PilarCard({
  imagen,
  imagenAlt,
  eyebrow,
  title,
  description,
  badge,
  size = "normal",
  children,
}: PilarCardProps) {
  const isLarge = size === "large";

  return (
    <div
      className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-xl border-t-[3px] border-t-rojo bg-carbon transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg ${
        isLarge ? "min-h-[300px] md:min-h-[520px]" : "min-h-[260px]"
      }`}
    >
      {imagen ? (
        <Image
          src={imagen}
          alt={imagenAlt}
          fill
          sizes={isLarge ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 35vw, 100vw"}
          className="object-cover transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105"
        />
      ) : (
        <Placeholder
          tone="on-dark"
          aspect="full"
          label={imagenAlt}
          className="absolute inset-0 h-full w-full transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105"
        />
      )}

      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-t ${
          isLarge
            ? "from-black/70 via-black/25 to-transparent"
            : "from-black/80 via-black/40 to-transparent"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/15"
      />

      {badge && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-3 py-1 backdrop-blur-sm">
          <MapPin size={14} className="text-red-300" aria-hidden="true" />
          <span className="font-sans text-xs font-medium text-white">{badge}</span>
        </div>
      )}

      <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
        <p className="font-sans text-xs font-medium tracking-wide text-red-300 uppercase">
          {eyebrow}
        </p>
        <div>
          <h3
            className={`font-display font-semibold text-white ${
              isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 font-sans text-white/85 ${
              isLarge ? "text-base md:text-lg" : "text-sm md:text-base"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

export default function TresPilares() {
  const whatsapp = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP ?? "");

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-carbon md:text-4xl">
            Fabricamos, instalamos y vendemos
          </h2>
          <p className="mt-3 text-center font-sans text-gris-texto">
            Planta propia, equipo de instalación y local con stock permanente: todo en una sola
            empresa.
          </p>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.3fr] md:items-stretch">
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1} className="md:flex-1">
              <PilarCard
                imagen={IMAGEN_FABRICA}
                imagenAlt="Detalle en primer plano de tejido romboidal galvanizado"
                eyebrow="Planta propia en Cerrillos"
                title="Fabricamos"
                description="Tejido romboidal y tejido artístico de fabricación propia. Precio y calidad directo de fábrica."
              >
                <Button variant="outline-white" href="/materiales">
                  Ver materiales
                </Button>
              </PilarCard>
            </FadeUp>

            <FadeUp delay={0.2} className="md:flex-1">
              <PilarCard
                imagen={IMAGEN_INSTALACION}
                imagenAlt="Instalación de cerco perimetral"
                eyebrow="Cercos y alambrados"
                title="Instalamos"
                description="Cercos olímpicos, rurales, de country y de piscina. Vamos, medimos y te pasamos el presupuesto sin cargo."
              >
                <Button variant="outline-white" href="/contacto">
                  Pedir presupuesto
                </Button>
              </PilarCard>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <PilarCard
              imagen={IMAGEN_MATERIALES}
              imagenAlt="Mostrador del local de venta de materiales en Zabala 410"
              eyebrow="Local en Zabala 410"
              title="Vendemos materiales"
              description="Postes, tejidos, mallas, gaviones, geotextil y accesorios. Por mayor y menor, con stock permanente."
              badge="Zabala 410 · Stock permanente"
              size="large"
            >
              <Button
                variant="whatsapp"
                href={whatsapp}
                icon={<MessageCircle size={20} aria-hidden="true" />}
              >
                Consultar por WhatsApp
              </Button>
            </PilarCard>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
