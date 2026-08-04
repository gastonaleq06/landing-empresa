import type { ReactNode } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  KeyRound,
  Package,
  MessageCircleQuestion,
  Factory,
  FileText,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Placeholder from "@/components/ui/Placeholder";
import FadeUp from "@/components/ui/FadeUp";

const IMAGEN: string | undefined = undefined;

type Feature = {
  icon: ReactNode;
  titulo: string;
  descripcion: string;
};

const FEATURES: Feature[] = [
  {
    icon: <ShieldCheck size={22} aria-hidden="true" />,
    titulo: "Sistema antirrobo reforzado",
    descripcion:
      "Planchuelas soldadas punto por punto en cada poste del tejido, para que no se pueda desprender ni forzar.",
  },
  {
    icon: <KeyRound size={22} aria-hidden="true" />,
    titulo: "La clave está en la base",
    descripcion:
      "Cada cerco lleva cordón de hormigón enterrado, no solo los postes: por eso no se mueve ni se hunde.",
  },
  {
    icon: <Package size={22} aria-hidden="true" />,
    titulo: "También vendemos los materiales",
    descripcion:
      "Tejido romboidal, postes de quebracho, púas, concertina y accesorios: por mayor y menor, con stock permanente.",
  },
  {
    icon: <MessageCircleQuestion size={22} aria-hidden="true" />,
    titulo: "¿Cuánto dura un poste de quebracho?",
    descripcion:
      "Usamos quebracho colorado, con una vida útil declarada de más de 30 años enterrado.",
  },
  {
    icon: <Factory size={22} aria-hidden="true" />,
    titulo: "Fabricación propia",
    descripcion: "Producimos nuestro propio tejido romboidal: calidad y precio directo de fábrica en Salta.",
  },
  {
    icon: <FileText size={22} aria-hidden="true" />,
    titulo: "Presupuesto sin cargo",
    descripcion: "Vamos, medimos y te pasamos el presupuesto sin costo ni compromiso.",
  },
];

function FeatureItem({ icon, titulo, descripcion }: Feature) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-rojo/10 text-rojo">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-carbon">{titulo}</h3>
        <p className="mt-1 font-sans text-sm leading-relaxed text-gris-texto">{descripcion}</p>
      </div>
    </div>
  );
}

export default function PorQueElegirnos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          <FadeUp className="relative h-64 lg:h-auto">
            {IMAGEN ? (
              <Image
                src={IMAGEN}
                alt="Cerco de tejido romboidal instalado por Alambrar SRL en un terreno de Salta"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="rounded-xl object-cover"
              />
            ) : (
              <Placeholder
                aspect="full"
                label="Foto de una obra terminada"
                className="absolute inset-0"
              />
            )}
          </FadeUp>

          <div>
            <FadeUp>
              <h2 className="font-display text-3xl font-semibold text-carbon md:text-4xl">
                Protegé lo tuyo con trabajo garantizado
              </h2>
              <p className="mt-3 font-sans text-gris-texto">
                No vendemos promesas: te mostramos cómo trabajamos y por qué podés confiar en
                nosotros.
              </p>
            </FadeUp>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <FadeUp key={feature.titulo} delay={Math.min(index, 4) * 0.1}>
                  <FeatureItem {...feature} />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
