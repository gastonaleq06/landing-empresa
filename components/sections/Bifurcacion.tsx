import type { ReactNode } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Set these once the photos are ready — see README notes for how to add them.
const IMAGEN_CASA: string | undefined = undefined;
const IMAGEN_OBRA: string | undefined = undefined;

interface BifurcacionCardProps {
  imagen?: string;
  imagenAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

function BifurcacionCard({
  imagen,
  imagenAlt,
  eyebrow,
  title,
  description,
  children,
}: BifurcacionCardProps) {
  return (
    <div className="relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-xl bg-carbon">
      {imagen ? (
        <Image
          src={imagen}
          alt={imagenAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <Placeholder
          tone="on-dark"
          aspect="full"
          label={imagenAlt}
          className="absolute inset-0 h-full w-full"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      />

      <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
        <p className="font-sans text-xs font-medium tracking-wide text-red-300 uppercase">
          {eyebrow}
        </p>
        <div>
          <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{title}</h3>
          <p className="mt-2 font-sans text-sm text-white/85 md:text-base">{description}</p>
        </div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

export default function Bifurcacion() {
  const whatsappVentas = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_VENTAS ?? "");

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-carbon md:text-4xl">
            ¿Qué necesitás resolver?
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <BifurcacionCard
              imagen={IMAGEN_CASA}
              imagenAlt="Cerco perimetral instalado en una casa"
              eyebrow="Para tu casa"
              title="Seguridad rápida para tu hogar"
              description="Cercos, portones y rejas. Te asesoramos y coordinamos la instalación."
            >
              <Button
                variant="whatsapp"
                href={whatsappVentas}
                icon={<MessageCircle size={20} aria-hidden="true" />}
              >
                Consultar por WhatsApp
              </Button>
            </BifurcacionCard>
          </FadeUp>

          <FadeUp delay={0.2}>
            <BifurcacionCard
              imagen={IMAGEN_OBRA}
              imagenAlt="Alambrado perimetral de un predio industrial"
              eyebrow="Para tu obra o empresa"
              title="Cerrá un predio o una obra grande"
              description="Factura A, grandes metrajes y presupuesto formal con medidas."
            >
              <Button variant="primary" href="/contacto">
                Solicitar presupuesto
              </Button>
            </BifurcacionCard>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
