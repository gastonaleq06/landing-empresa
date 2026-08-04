export type Calibre = {
  id: string;
  nombre: string;
  descripcion: string;
  src?: string;
};

export const CALIBRES: Calibre[] = [
  {
    id: "calibre-12",
    nombre: "Calibre 12",
    descripcion:
      "Máxima seguridad. Cerramientos hogareños, industriales y canchas deportivas, o si tenés perros grandes y movedizos.",
  },
  {
    id: "calibre-13",
    nombre: "Calibre 13",
    descripcion:
      "El estándar que usamos en casi todas nuestras obras. Malla 2½\" × 13: el punto medio entre resistencia y precio.",
  },
  {
    id: "calibre-14",
    nombre: "Calibre 14",
    descripcion: "Liviano y económico. Patios internos, huertas y mascotas chicas.",
  },
];
