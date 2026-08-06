import Image from "next/image";
import { Factory } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

interface MaterialCardProps {
  nombre: string;
  descripcion: string;
  src?: string;
  fabricacionPropia?: boolean;
  proximamente?: boolean;
}

export default function MaterialCard({
  nombre,
  descripcion,
  src,
  fabricacionPropia,
  proximamente,
}: MaterialCardProps) {
  return (
    <div className="flex h-full flex-col items-center rounded-xl border-[0.5px] border-carbon/20 border-t-[3px] border-t-rojo bg-white p-8 text-center transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg">
      <div className="relative size-40 shrink-0 overflow-hidden rounded-full ring-4 ring-rojo md:size-48">
        {src ? (
          <Image
            src={src}
            alt={nombre}
            fill
            sizes="(min-width: 768px) 12rem, 10rem"
            className="object-cover"
          />
        ) : (
          <Placeholder aspect="full" shape="circle" className="h-full w-full" />
        )}
        {proximamente && (
          <span className="absolute top-1 left-1/2 -translate-x-1/2 rounded-full bg-rojo px-3 py-1 font-sans text-[11px] font-semibold tracking-wide text-white uppercase shadow-sm">
            Próximamente
          </span>
        )}
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-carbon uppercase underline decoration-rojo decoration-2 underline-offset-8">
        {nombre}
      </h3>
      {fabricacionPropia && (
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-rojo/10 px-3 py-1 font-sans text-xs font-medium text-rojo">
          <Factory size={14} aria-hidden="true" />
          Fabricación propia
        </span>
      )}
      <p className="mt-4 font-sans text-sm leading-relaxed text-gris-texto">{descripcion}</p>
      {proximamente && (
        <p className="mt-2 font-sans text-sm font-medium text-gris-texto">
          Consultanos por disponibilidad.
        </p>
      )}
    </div>
  );
}
