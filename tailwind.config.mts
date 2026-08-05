import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: "#C42126",
        "rojo-hover": "#8E1519",
        carbon: "#1C1C1E",
        "gris-texto": "#6B6B70",
        "fondo-claro": "#F4F4F5",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-archivo)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
};

export default config;
