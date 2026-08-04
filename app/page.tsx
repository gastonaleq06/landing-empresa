import Hero from "@/components/sections/Hero";
import Bifurcacion from "@/components/sections/Bifurcacion";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Servicios from "@/components/sections/Servicios";
import PorQueElegirnos from "@/components/sections/PorQueElegirnos";
import GuiaCalibres from "@/components/sections/GuiaCalibres";
import ConfianEnNosotros from "@/components/sections/ConfianEnNosotros";
import Resenas from "@/components/sections/Resenas";

export default function Home() {
  return (
    <>
      <Hero />
      <Bifurcacion />
      <QuienesSomos />
      <Servicios />
      <PorQueElegirnos />
      <GuiaCalibres />
      <ConfianEnNosotros />
      <Resenas />
    </>
  );
}
