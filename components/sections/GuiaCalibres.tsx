import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import MaterialCard from "@/components/ui/MaterialCard";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CALIBRES } from "@/lib/calibres";

export default function GuiaCalibres() {
  const whatsapp = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP ?? "");

  return (
    <section id="calibres" className="bg-rojo-textura py-16 md:py-24">
      <Container>
        <FadeUp>
          <p className="text-center font-sans text-sm font-medium tracking-widest text-white uppercase">
            Guía rápida
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-semibold text-white md:text-4xl">
            ¿Qué calibre de tejido necesitás?
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CALIBRES.map((calibre, index) => (
            <FadeUp key={calibre.id} delay={index * 0.1}>
              <MaterialCard
                nombre={calibre.nombre}
                descripcion={calibre.descripcion}
                src={calibre.src}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-white">
            ¿Seguís con dudas sobre cuál se adapta mejor a tu terreno?
          </p>
          <Button
            variant="outline-white"
            href={whatsapp}
            icon={<MessageCircle size={20} aria-hidden="true" />}
          >
            Consultanos por WhatsApp
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
