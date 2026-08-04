// Zonas con obra confirmada por publicaciones propias del negocio (Facebook).
const AREA_SERVIDA = ["Salta Capital", "San Lorenzo", "Valle Escondido", "La Lucinda Norte"];

const HORARIOS = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "14:00" },
  { dayOfWeek: ["Saturday"], opens: "10:00", closes: "13:00" },
];

export default function LocalBusinessJsonLd() {
  const direccion = process.env.NEXT_PUBLIC_DIRECCION?.trim();
  const telefono = process.env.NEXT_PUBLIC_TELEFONO?.trim();
  const email = process.env.NEXT_PUBLIC_EMAIL?.trim();
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim();
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim();

  const sameAs = [facebookUrl, instagramUrl].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Alambrar SRL",
    description:
      "Fabricación e instalación de cercos, alambrados, portones y concertina en Salta.",
    ...(direccion && {
      address: {
        "@type": "PostalAddress",
        streetAddress: direccion,
        addressLocality: "Salta",
        addressRegion: "Salta",
        addressCountry: "AR",
      },
    }),
    ...(telefono && { telephone: telefono }),
    ...(email && { email }),
    areaServed: AREA_SERVIDA,
    ...(sameAs.length > 0 && { sameAs }),
    openingHoursSpecification: HORARIOS.map((horario) => ({
      "@type": "OpeningHoursSpecification",
      ...horario,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
