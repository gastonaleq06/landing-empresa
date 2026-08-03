import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";

type Resena = { autor: string; estrellas: number; texto: string };

const RESENAS: Resena[] = [
  {
    autor: "ROBERTO",
    estrellas: 5,
    texto: "Llamé por teléfono. No tenían lo que necesitaba pero me asesoraron , me pasaron información de dónde podría conseguirlo, nombre, dirección, telefono, etc. Excelente atención. Merece esta reseña.",
  },
  {
    autor: "PIA SAYONS",
    estrellas: 5,
    texto: "En septiembre contratamos la instalación del alambrado lateral de mi casa y me fue espectacular, nos brindaron un buen servicio en todo momento. Quedó súper prolijo y los chicos que trabajaron súper respetuosos y ordenados.",
  },
  {
    autor: "SHADI ASKAR",
    estrellas: 4,
    texto: "Una variedad enorme de alambres y sus accesorios, horario muy cómodo, atención personalizada, muy recomendable!!",
  },
  {
    autor: "RAFAEL URQUIDI",
    estrellas: 5,
    texto: "Buena atención buena predisposición el trabajo excelente buena mano de obra muy responsables y comprometidos surtido y calidad de materiales",
  },
];

function Estrellas({ cantidad }: { cantidad: number }) {
  return (
    <div role="img" aria-label={`${cantidad} de 5 estrellas`} className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={18}
          aria-hidden="true"
          className={index < cantidad ? "fill-rojo text-rojo" : "text-carbon/20"}
        />
      ))}
    </div>
  );
}

function ResenaCard({ autor, estrellas, texto }: Resena) {
  return (
    <div className="flex flex-col rounded-xl border-[0.5px] border-carbon/20 border-t-[3px] border-t-rojo bg-white p-6 transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg">
      <Estrellas cantidad={estrellas} />
      <p className="mt-4 flex-1 font-sans text-gris-texto">&ldquo;{texto}&rdquo;</p>
      <p className="mt-4 font-display text-sm font-semibold text-carbon">{autor}</p>
    </div>
  );
}

// Fallback so the CTA never disappears if NEXT_PUBLIC_GOOGLE_REVIEWS_URL isn't set yet.
const GOOGLE_REVIEWS_FALLBACK_URL = "https://www.google.com/search?q=Alambrar+SRL+Salta+opiniones";

export default function Resenas() {
  const googleReviewsUrl =
    (process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "").trim() || GOOGLE_REVIEWS_FALLBACK_URL;

  if (RESENAS.length === 0) return null;

  return (
    <section className="bg-fondo-claro py-16 md:py-24">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-semibold text-carbon md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESENAS.map((resena, index) => (
            <FadeUp key={`${resena.autor}-${index}`} delay={index * 0.1}>
              <ResenaCard {...resena} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-10 flex justify-center">
          <Button
            variant="primary"
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todas nuestras reseñas en Google
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
