import { MapPin, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import MaterialCard from "@/components/ui/MaterialCard";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MATERIALES } from "@/lib/materiales";

export default function Materiales() {
  const whatsappVentas = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_VENTAS ?? "");
  const direccion = process.env.NEXT_PUBLIC_DIRECCION || "";

  return (
    <section className="bg-rojo-textura py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-white md:text-4xl">
            Materiales y accesorios
          </h2>
        </FadeUp>

        <FadeUp delay={0.05} className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white px-4 py-1.5 font-sans text-sm font-medium text-carbon border-[0.5px] border-carbon/20">
            Por mayor y menor
          </span>
          <span className="rounded-full bg-white px-4 py-1.5 font-sans text-sm font-medium text-carbon border-[0.5px] border-carbon/20">
            Stock permanente
          </span>
          {direccion && (
            <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 font-sans text-sm font-medium text-carbon border-[0.5px] border-carbon/20">
              <MapPin size={14} className="text-rojo" aria-hidden="true" />
              {direccion}
            </span>
          )}
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MATERIALES.map((material, index) => (
            <FadeUp key={material.id} delay={Math.min(index, 4) * 0.1}>
              <MaterialCard
                nombre={material.nombre}
                descripcion={material.descripcion}
                src={material.src}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex justify-center">
          <Button
            variant="outline-white"
            href={whatsappVentas}
            icon={<MessageCircle size={20} aria-hidden="true" />}
          >
            Consultar stock y precios
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
