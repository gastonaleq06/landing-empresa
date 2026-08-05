import { Check, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import RotatingWord from "@/components/ui/RotatingWord";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Completar con la ruta de la foto (ej. "/hero.jpg") una vez que esté en /public.
const HERO_IMAGE: string | undefined = undefined;

const PRODUCTOS = ["postes", "cercos perimetrales", "alambrados"];

const garantias = [
  "Más de 15 años de trayectoria",
  "Fabricación propia",
  "Instalación profesional",
  "Asesoramiento sin cargo",
];

export default function Hero() {
  const whatsappVentas = buildWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_VENTAS ?? "");
  const telefono = process.env.NEXT_PUBLIC_TELEFONO ?? "";

  return (
    <section
      id="inicio"
      className={`relative flex min-h-[80vh] items-start overflow-hidden pt-[60px] sm:pt-[clamp(80px,12vh,140px)] ${
        HERO_IMAGE ? "bg-rojo" : "bg-rojo-textura"
      }`}
    >
      {HERO_IMAGE && (
        <Image
          src={HERO_IMAGE}
          alt="Cerco o portón instalado por Alambrar SRL"
          fill
          priority
          className="object-cover"
        />
      )}

      <div
        className={
          HERO_IMAGE
            ? "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"
            : "absolute inset-0 bg-black/10"
        }
      />

      <Container className="relative z-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/logo-mark.png"
              alt=""
              width={160}
              height={160}
              priority
              className="h-[clamp(76px,9vw,120px)] w-[clamp(76px,9vw,120px)]"
            />
            <p className="mt-2 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-widest whitespace-nowrap text-white">
              ALAMBRAR
            </p>
            <p className="mt-1 font-display text-[clamp(13px,1.6vw,18px)] font-medium tracking-[0.4em] text-white/90">
              ALAMBRES TEJIDOS
            </p>
          </div>

          <h1 className="mt-10 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold text-white">
            <span className="block">Fabricación, instalación y venta de</span>
            <RotatingWord words={PRODUCTOS} className="text-white" block />
            <span className="block">en Salta Capital</span>
          </h1>
          <p className="mt-3 font-sans text-lg text-white/90">Presupuesto sin cargo.</p>

          <ul className="mt-6 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-center sm:gap-8">
            {garantias.map((garantia) => (
              <li key={garantia} className="flex items-center gap-2 font-sans text-white">
                <Check size={18} className="shrink-0 text-white" aria-hidden="true" />
                {garantia}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="whatsapp"
              href={whatsappVentas}
              icon={<MessageCircle size={20} aria-hidden="true" />}
            >
              Cotizar por WhatsApp
            </Button>
            <Button
              variant="outline-white"
              href={`tel:${telefono}`}
              icon={<Phone size={20} aria-hidden="true" />}
            >
              Llamar
            </Button>
          </div>
        </div>
      </Container>

      <div id="hero-sentinel" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
