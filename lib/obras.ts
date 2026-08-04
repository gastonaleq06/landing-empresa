export type CategoriaObra = "Residencial" | "Country" | "Rural" | "Seguridad";

export type Obra = {
  id: string;
  titulo: string;
  categoria: CategoriaObra;
  ubicacion?: string;
  specs?: string[];
  src?: string;
};

export const CATEGORIAS: CategoriaObra[] = [
  "Residencial",
  "Country",
  "Rural",
  "Seguridad",
];

export const OBRAS: Obra[] = [
  {
    id: "1",
    titulo: "Cerramiento residencial",
    categoria: "Country",
    ubicacion: "Valle Escondido",
    specs: [
      "Quebracho colorado tratado",
      "Tejido romboidal 2½\" × calibre 13",
      "Cordón de hormigón enterrado",
    ],
  },
  {
    id: "2",
    titulo: "Cerco de propiedad",
    categoria: "Country",
    ubicacion: "La Lucinda Norte",
    specs: [
      "Quebracho labrado",
      "Tejido romboidal 2½\" × calibre 13",
      "Cordón enterrado, altura útil 1,20 m",
    ],
  },
  {
    id: "3",
    titulo: "Concertina sobre tejido",
    categoria: "Seguridad",
    ubicacion: "San Lorenzo",
    specs: [
      "Tejido romboidal",
      "Postes de madera sobre base de hormigón",
      "Concertina de acero de alta resistencia",
    ],
  },
  {
    id: "4",
    titulo: "Puerta de tablas estilo campo",
    categoria: "Rural",
    specs: [
      "Tablas 1\"×4\" de quebracho colorado",
      "Malla 2½\" × calibre 13",
      "Zócalo de hormigón de 20 cm",
    ],
  },
  {
    id: "5",
    titulo: "Portón de caño estructural",
    categoria: "Residencial",
    specs: [
      "Caño estructural 2\"",
      "Malla 2½\" × calibre 13",
      "Punta de lanza con planchuelas, 4,00 × 2,40 m",
    ],
  },
];
