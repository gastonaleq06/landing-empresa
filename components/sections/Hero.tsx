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
      className={`relative flex min-h-[80vh] items-center overflow-hidden ${
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

      <Container className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/logo-mark.png"
              alt=""
              width={160}
              height={160}
              priority
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
            <p className="mt-4 font-display text-2xl font-semibold tracking-widest text-white sm:text-3xl md:text-4xl">
              ALAMBRAR
            </p>
            <p className="mt-1 font-display text-[10px] font-medium tracking-[0.4em] text-white/90 sm:text-xs">
              ALAMBRES TEJIDOS
            </p>
          </div>

          <h1 className="mt-8 font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            <span className="block">Fabricación, instalación y venta de</span>
            <RotatingWord words={PRODUCTOS} className="text-white" block />
            <span className="block">en Salta Capital</span>
          </h1>
          <p className="mt-4 font-sans text-lg text-white/90">Presupuesto sin cargo.</p>

          <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            {garantias.map((garantia) => (
              <li key={garantia} className="flex items-center gap-2 font-sans text-white">
                <Check size={18} className="shrink-0 text-white" aria-hidden="true" />
                {garantia}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
    </section>
  );
}
