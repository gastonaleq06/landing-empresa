import { ExternalLink } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

const HORARIOS = [
  { dias: "Lunes a Viernes", horario: "11:00 - 14:00" },
  { dias: "Sábados", horario: "10:00 - 13:00" },
];

const MAPA_TITULO = "¿Cómo llegar?";
const MAPA_SUBTITULO = "Estamos en Salta";

export default function InfoOficina() {
  const direccion = process.env.NEXT_PUBLIC_DIRECCION || "";
  const telefono = process.env.NEXT_PUBLIC_TELEFONO || "";
  const email = process.env.NEXT_PUBLIC_EMAIL || "";
  const mapsUrl = process.env.NEXT_PUBLIC_MAPS_URL || "";

  const mapsEmbedSrc = direccion
    ? `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`
    : "";
  const mapsLinkUrl =
    mapsUrl || (direccion ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}` : "");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-display text-xl font-semibold text-carbon">
          Visitanos en nuestras oficinas
        </h3>
        <dl className="mt-4 flex flex-col gap-2 font-sans text-gris-texto">
          {direccion && (
            <div className="flex gap-2">
              <dt className="font-medium text-carbon">Dirección:</dt>
              <dd>{direccion}</dd>
            </div>
          )}
          {telefono && (
            <div className="flex gap-2">
              <dt className="font-medium text-carbon">Teléfono:</dt>
              <dd>{telefono}</dd>
            </div>
          )}
          {email && (
            <div className="flex gap-2">
              <dt className="font-medium text-carbon">Email:</dt>
              <dd>{email}</dd>
            </div>
          )}
        </dl>
      </div>

      <div>
        <h4 className="font-display text-base font-semibold text-carbon">
          Horarios de atención
        </h4>
        <ul className="mt-2 flex flex-col gap-1 font-sans text-gris-texto">
          {HORARIOS.map((horario) => (
            <li key={horario.dias}>
              {horario.dias}: {horario.horario}
            </li>
          ))}
        </ul>
      </div>

      {mapsEmbedSrc ? (
        <div className="overflow-hidden rounded-xl border-[0.5px] border-carbon/20">
          <div className="bg-fondo-claro px-6 py-4">
            <h4 className="font-display text-lg font-semibold text-carbon">{MAPA_TITULO}</h4>
            <p className="font-sans text-sm text-gris-texto">{MAPA_SUBTITULO}</p>
          </div>

          <iframe
            src={mapsEmbedSrc}
            title="Mapa de ubicación de Alambrar SRL"
            width="100%"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="flex justify-center bg-white p-4">
            <a
              href={mapsLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm font-medium text-rojo transition-colors hover:text-rojo-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo"
            >
              Abrir en Google Maps
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : (
        <Placeholder label="Mapa" />
      )}
    </div>
  );
}
