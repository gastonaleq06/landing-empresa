export type Material = {
  id: string;
  nombre: string;
  descripcion: string;
  src?: string;
};

export const MATERIALES: Material[] = [
  {
    id: "tejido-galvanizado",
    nombre: "Tejido romboidal galvanizado",
    descripcion:
      "Tejido romboidal de fabricación propia, en calibres 12, 13 y 14 y distintas alturas. Terminación galvanizada. Se vende por rollo o por metro.",
  },
  {
    id: "tejido-pvc",
    nombre: "Tejido revestido en PVC",
    descripcion:
      "El mismo tejido romboidal de fabricación propia, revestido en PVC. Disponible en calibres 12, 13 y 14 y distintas alturas.",
  },
  {
    id: "tejido-ligustrina",
    nombre: "Tejido símil ligustrina",
    descripcion:
      "Tejido romboidal de fabricación propia con terminación símil ligustrina. Mismos calibres y alturas que el resto de la línea.",
  },
  {
    id: "alambre-puas",
    nombre: "Alambre de púas",
    descripcion: "Alambre de púas para uso rural y agrícola.",
  },
  {
    id: "alambre-concertina",
    nombre: "Alambre concertina",
    descripcion:
      "Alambre concertina de acero de alta resistencia, para seguridad perimetral.",
  },
  {
    id: "postes-quebracho",
    nombre: "Postes de quebracho colorado",
    descripcion:
      "Postes de quebracho colorado, con una vida útil declarada de más de 30 años enterrados.",
  },
  {
    id: "torniquetas",
    nombre: "Torniquetas",
    descripcion: "Torniquetas para estirar el alambre.",
  },
  {
    id: "ganchos-tensores",
    nombre: "Ganchos tensores galvanizados",
    descripcion:
      "Ganchos tensores de acero galvanizado, en kit con tuerca y arandela.",
  },
];
