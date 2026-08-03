import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col items-start rounded-xl border-[0.5px] border-carbon/20 border-t-[3px] border-t-rojo bg-white p-6 transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg">
      <div className="flex size-12 items-center justify-center rounded-full bg-rojo/10 text-rojo transition-colors duration-200 ease-out group-hover:bg-rojo/20">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-carbon">{title}</h3>
      <p className="mt-2 font-sans text-sm text-gris-texto">{description}</p>
    </div>
  );
}
