import type { ReactNode } from "react";
import { ShieldCheck, KeyRound, Clock, MessageCircleQuestion } from "lucide-react";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import FadeUp from "@/components/ui/FadeUp";

type Feature = {
  icon: ReactNode;
  titulo: string;
  descripcion: string;
};

const FEATURES: Feature[] = [
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    titulo: "Trabajo que queda bien",
    descripcion:
      "Cada cerco lo hacemos para que dure: bien tensado, bien instalado, sin atajos. Te lo entregamos como si fuera para nuestra casa.",
  },
  {
    icon: <KeyRound size={24} aria-hidden="true" />,
    titulo: "No te dejamos a mitad de camino",
    descripcion:
      "Nos encargamos de todo, de la medición a la instalación final. Un solo responsable, sin correr atrás de nadie.",
  },
  {
    icon: <Clock size={24} aria-hidden="true" />,
    titulo: "Cumplimos los tiempos",
    descripcion: "Te damos un plazo real y lo respetamos. Sabés cuándo empezamos y cuándo terminamos.",
  },
  {
    icon: <MessageCircleQuestion size={24} aria-hidden="true" />,
    titulo: "Te ayudamos a decidir",
    descripcion:
      "¿No sabés qué cerco necesitás? Te asesoramos según tu terreno, tu uso y tu presupuesto, sin compromiso.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="bg-fondo-claro py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-carbon md:text-4xl">
            Por qué elegirnos
          </h2>
        </FadeUp>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <FadeUp key={feature.titulo} delay={index * 0.1}>
              <FeatureCard
                icon={feature.icon}
                title={feature.titulo}
                description={feature.descripcion}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
