"use client";

import { useState } from "react";
import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";
import FadeUp from "@/components/ui/FadeUp";
import { CATEGORIAS, OBRAS, type CategoriaObra, type Obra } from "@/lib/obras";

type Filtro = "Todas" | CategoriaObra;

const FILTROS: Filtro[] = ["Todas", ...CATEGORIAS];

function ObraCard({ titulo, categoria, src }: Obra) {
  return (
    <div className="group overflow-hidden rounded-xl border-[0.5px] border-carbon/20 border-t-[3px] border-t-rojo bg-white transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={titulo}
            fill
            className="object-cover transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105"
          />
        ) : (
          <Placeholder
            aspect="4/3"
            className="h-full w-full !rounded-b-none transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <p className="font-sans text-xs font-medium tracking-wide text-gris-texto uppercase">
          {categoria}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-carbon">{titulo}</h3>
      </div>
    </div>
  );
}

export default function GaleriaObras() {
  const [filtro, setFiltro] = useState<Filtro>("Todas");

  const obrasFiltradas = filtro === "Todas" ? OBRAS : OBRAS.filter((obra) => obra.categoria === filtro);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar por categoría">
        {FILTROS.map((item) => {
          const activo = item === filtro;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={activo}
              onClick={() => setFiltro(item)}
              className={`cursor-pointer rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo ${
                activo
                  ? "bg-rojo text-white"
                  : "bg-fondo-claro text-carbon hover:bg-carbon/10"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {obrasFiltradas.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {obrasFiltradas.map((obra, index) => (
            <FadeUp key={obra.id} delay={Math.min(index, 4) * 0.1}>
              <ObraCard {...obra} />
            </FadeUp>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center font-sans text-gris-texto">
          Pronto vamos a publicar trabajos de esta categoría.
        </p>
      )}
    </div>
  );
}
