import Hero from "@/components/sections/Hero";
import Bifurcacion from "@/components/sections/Bifurcacion";
import QuienesSomos from "@/components/sections/QuienesSomos";
import PorQueElegirnos from "@/components/sections/PorQueElegirnos";
import Servicios from "@/components/sections/Servicios";
import ConfianEnNosotros from "@/components/sections/ConfianEnNosotros";
import Resenas from "@/components/sections/Resenas";

export default function Home() {
  return (
    <>
      <Hero />
      <Bifurcacion />
      <QuienesSomos />
      <PorQueElegirnos />
      <Servicios />
      <ConfianEnNosotros />
      <Resenas />
    </>
  );
}
