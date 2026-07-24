import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start rounded-xl border-[0.5px] border-carbon/20 border-t-[3px] border-t-rojo bg-white p-6">
      <div className="flex size-12 items-center justify-center rounded-full bg-rojo/10 text-rojo">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-carbon">{title}</h3>
      <p className="mt-2 font-sans text-sm text-gris-texto">{description}</p>
    </div>
  );
}
