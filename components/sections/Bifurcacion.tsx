import type { ReactNode } from "react";
import { Building2, Check, Home, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface BifurcacionCardProps {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  children: ReactNode;
}

function BifurcacionCard({ icon, eyebrow, title, subtitle, bullets, children }: BifurcacionCardProps) {
  return (
    <div className="flex flex-col rounded-xl border-[0.5px] border-carbon/20 border-t-[3px] border-t-rojo p-6">
      <div className="text-rojo">{icon}</div>
      <p className="mt-4 font-sans text-xs font-medium tracking-wide text-rojo uppercase">
        {eyebrow}
      </p>
      <h3 className="mt-1 font-display text-xl font-semibold text-carbon">{title}</h3>
      <p className="mt-1 font-sans text-gris-texto">{subtitle}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2 font-sans text-carbon">
            <Check size={18} className="shrink-0 text-rojo" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-6">{children}</div>
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
            ¿Qué tipo de proyecto tenés?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <BifurcacionCard
            icon={<Building2 size={32} aria-hidden="true" />}
            eyebrow="Empresas y campos"
            title="Para tu obra o empresa"
            subtitle="Contanos medidas y terreno: con eso armamos presupuesto cerrado, sin necesidad de visita previa."
            bullets={[
              "Factura A",
              "Presupuesto detallado",
              "Asesoramiento técnico",
              "Cercos de piscina y concertina",
            ]}
          >
            <Button variant="primary" href="/contacto#presupuesto">
              Solicitar presupuesto
            </Button>
          </BifurcacionCard>

          <BifurcacionCard
            icon={<Home size={32} aria-hidden="true" />}
            eyebrow="Casas y terrenos"
            title="Para tu casa"
            subtitle="Resolvé rápido, hablá con nosotros"
            bullets={["Envío en Salta", "Te asesoramos", "Instalación disponible"]}
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
      </Container>
    </section>
  );
}
