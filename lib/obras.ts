export type CategoriaObra = "Residencial" | "Comercial" | "Industrial" | "Seguridad";

export type Obra = {
  id: string;
  titulo: string;
  categoria: CategoriaObra;
  src?: string;
};

export const CATEGORIAS: CategoriaObra[] = [
  "Residencial",
  "Comercial",
  "Industrial",
  "Seguridad",
];

export const OBRAS: Obra[] = [
  { id: "1", titulo: "Cerco perimetral en vivienda", categoria: "Residencial" },
  { id: "2", titulo: "Cerco de piscina", categoria: "Residencial" },
  { id: "3", titulo: "Tejido romboidal para casa quinta", categoria: "Residencial" },
  { id: "4", titulo: "Cerramiento de local comercial", categoria: "Comercial" },
  { id: "5", titulo: "Portón estructural reforzado", categoria: "Comercial" },
  { id: "6", titulo: "Cerco perimetral para estacionamiento", categoria: "Comercial" },
  { id: "7", titulo: "Cerco perimetral en planta industrial", categoria: "Industrial" },
  { id: "8", titulo: "Cerramiento de depósito", categoria: "Industrial" },
  { id: "9", titulo: "Portón corredizo para playa de maniobras", categoria: "Industrial" },
  { id: "10", titulo: "Colocación de concertina", categoria: "Seguridad" },
  { id: "11", titulo: "Cerco de seguridad perimetral", categoria: "Seguridad" },
  { id: "12", titulo: "Refuerzo de cerco con concertina", categoria: "Seguridad" },
];
