import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";

interface MaterialCardProps {
  nombre: string;
  descripcion: string;
  src?: string;
}

export default function MaterialCard({ nombre, descripcion, src }: MaterialCardProps) {
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
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-carbon uppercase underline decoration-rojo decoration-2 underline-offset-8">
        {nombre}
      </h3>
      <p className="mt-4 font-sans text-sm leading-relaxed text-gris-texto">{descripcion}</p>
    </div>
  );
}
