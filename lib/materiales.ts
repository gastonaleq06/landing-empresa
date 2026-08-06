export type Material = {
  id: string;
  nombre: string;
  descripcion: string;
  src?: string;
  fabricacionPropia?: boolean;
  proximamente?: boolean;
};

export const MATERIALES: Material[] = [
  {
    id: "tejido-galvanizado",
    nombre: "Tejido romboidal galvanizado",
    descripcion:
      "Tejido romboidal de fabricación propia, en calibres 12, 13 y 14 y distintas alturas. Terminación galvanizada. Se vende por rollo o por metro.",
    fabricacionPropia: true,
  },
  {
    id: "tejido-pvc",
    nombre: "Tejido revestido en PVC",
    descripcion:
      "El mismo tejido romboidal de fabricación propia, revestido en PVC. Disponible en calibres 12, 13 y 14 y distintas alturas.",
    fabricacionPropia: true,
  },
  {
    id: "tejido-ligustrina",
    nombre: "Tejido símil ligustrina",
    descripcion:
      "Tejido romboidal de fabricación propia con terminación símil ligustrina. Mismos calibres y alturas que el resto de la línea.",
    fabricacionPropia: true,
  },
  {
    id: "tejido-artistico",
    nombre: "Tejido artístico",
    descripcion:
      "Tejido artístico de fabricación propia, producido en nuestra planta de Cerrillos.",
    fabricacionPropia: true,
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
    id: "alambre-cerco-electrico",
    nombre: "Alambre para cerco eléctrico",
    descripcion: "Alambre para cercos eléctricos, para uso rural y agrícola.",
  },
  {
    id: "boyeros-electrificadores",
    nombre: "Boyeros y electrificadores",
    descripcion: "Boyeros y electrificadores para cerco eléctrico.",
  },
  {
    id: "postes-quebracho",
    nombre: "Postes de quebracho colorado",
    descripcion:
      "Postes de quebracho colorado, con una vida útil declarada de más de 30 años enterrados.",
  },
  {
    id: "mallas",
    nombre: "Mallas",
    descripcion: "Consultanos por tipo, medida y calibre.",
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
  {
    id: "gaviones",
    nombre: "Gaviones",
    descripcion: "Gaviones para muros de contención y uso decorativo.",
  },
  {
    id: "geotextil",
    nombre: "Geotextil",
    descripcion: "Geotextil para obra y contención de suelos.",
  },
  {
    id: "premoldeados-hormigon",
    nombre: "Premoldeados de hormigón",
    descripcion: "Premoldeados de hormigón de fabricación propia, en nuestra planta de Cerrillos.",
    fabricacionPropia: true,
    proximamente: true,
  },
];
