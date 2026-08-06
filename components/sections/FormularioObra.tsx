"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import Field from "@/components/ui/form/Field";
import TextInput from "@/components/ui/form/TextInput";
import TextArea from "@/components/ui/form/TextArea";
import RadioCards, {
  type RadioCardOption,
} from "@/components/ui/form/RadioCards";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface DatosObra {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccionObra: string;
  localidad: string;
  codigoPostal: string;
  tejido: string;
  poste: string;
  malla: string;
  terreno: string;
  frente: string;
  lateral: string;
  fondo: string;
  incluyePorton: boolean;
  tipoPorton: string;
  ubicacionPorton: string;
  observaciones: string;
}

type ErroresObra = Partial<Record<keyof DatosObra, string>>;

const DATOS_INICIALES: DatosObra = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  direccionObra: "",
  localidad: "",
  codigoPostal: "",
  tejido: "",
  poste: "",
  malla: "",
  terreno: "",
  frente: "",
  lateral: "",
  fondo: "",
  incluyePorton: false,
  tipoPorton: "",
  ubicacionPorton: "",
  observaciones: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const OPCIONES_TEJIDO: RadioCardOption[] = [
  {
    value: "Símil ligustrina",
    label: "Símil ligustrina",
    image: <Placeholder aspect="1/1" />,
  },
  {
    value: "Revestido en PVC",
    label: "Revestido en PVC",
    image: <Placeholder aspect="1/1" />,
  },
  {
    value: "Galvanizado romboidal",
    label: "Galvanizado romboidal",
    image: <Placeholder aspect="1/1" />,
  },
];

const OPCIONES_POSTE: RadioCardOption[] = [
  { value: "Poste olímpico", label: "Poste olímpico" },
  { value: "Poste recto", label: "Poste recto" },
];

const OPCIONES_MALLA: RadioCardOption[] = [
  {
    value: 'Malla 1½"',
    label: 'Malla 1½"',
    image: <Placeholder aspect="1/1" />,
  },
  { value: 'Malla 2"', label: 'Malla 2"', image: <Placeholder aspect="1/1" /> },
  {
    value: 'Malla 2½"',
    label: 'Malla 2½"',
    image: <Placeholder aspect="1/1" />,
  },
  { value: 'Malla 3"', label: 'Malla 3"', image: <Placeholder aspect="1/1" /> },
];

const OPCIONES_TERRENO: RadioCardOption[] = [
  { value: "Lote", label: "Lote" },
  { value: "Lote con ochava", label: "Lote con ochava" },
];

const OPCIONES_TIPO_PORTON: RadioCardOption[] = [
  {
    value: "Caño estructural - línea económica",
    label: "Caño estructural - línea económica",
  },
  { value: "Caño estructural reforzado", label: "Caño estructural reforzado" },
];

const OPCIONES_UBICACION_PORTON: RadioCardOption[] = [
  { value: "Frente", label: "Frente" },
  { value: "Lateral", label: "Lateral" },
  { value: "Fondo", label: "Fondo" },
];

function esNumeroValido(valor: string): boolean {
  const numero = Number(valor.trim());
  return valor.trim() !== "" && !Number.isNaN(numero) && numero > 0;
}

function validar(datos: DatosObra): ErroresObra {
  const errores: ErroresObra = {};

  if (!datos.nombre.trim()) errores.nombre = "Ingresá tu nombre.";
  if (!datos.apellido.trim()) errores.apellido = "Ingresá tu apellido.";
  if (!datos.email.trim()) errores.email = "Ingresá tu email.";
  else if (!EMAIL_REGEX.test(datos.email.trim()))
    errores.email = "Ingresá un email válido.";
  if (!datos.direccionObra.trim())
    errores.direccionObra = "Ingresá la dirección de la obra.";
  if (!datos.localidad.trim()) errores.localidad = "Ingresá la localidad.";
  if (!datos.tejido) errores.tejido = "Elegí un tipo de tejido.";
  if (!datos.poste) errores.poste = "Elegí un tipo de poste.";
  if (!datos.malla) errores.malla = "Elegí un tipo de malla.";
  if (!datos.terreno) errores.terreno = "Elegí un tipo de terreno.";
  if (!esNumeroValido(datos.frente))
    errores.frente = "Ingresá el frente en metros.";
  if (!esNumeroValido(datos.lateral))
    errores.lateral = "Ingresá el lateral en metros.";
  if (!esNumeroValido(datos.fondo))
    errores.fondo = "Ingresá el fondo en metros.";

  if (datos.incluyePorton) {
    if (!datos.tipoPorton) errores.tipoPorton = "Elegí un tipo de portón.";
    if (!datos.ubicacionPorton)
      errores.ubicacionPorton = "Elegí la ubicación del portón.";
  }

  return errores;
}

function construirMensaje(datos: DatosObra): string {
  const lineas = [
    "Solicitud de presupuesto - Alambrar",
    "",
    `Nombre: ${datos.nombre} ${datos.apellido}`,
    `Email: ${datos.email}`,
  ];

  if (datos.telefono.trim()) lineas.push(`Teléfono: ${datos.telefono}`);

  lineas.push(`Dirección de obra: ${datos.direccionObra}`);
  lineas.push(
    `Localidad: ${datos.localidad}${datos.codigoPostal.trim() ? ` (CP ${datos.codigoPostal})` : ""}`,
  );
  lineas.push("");
  lineas.push(`Tejido: ${datos.tejido}`);
  lineas.push(`Poste: ${datos.poste}`);
  lineas.push(`Malla: ${datos.malla}`);
  lineas.push(`Terreno: ${datos.terreno}`);
  lineas.push(
    `Medidas: Frente ${datos.frente}m / Lateral ${datos.lateral}m / Fondo ${datos.fondo}m`,
  );

  if (datos.incluyePorton) {
    lineas.push("");
    lineas.push(
      `Portón: ${datos.tipoPorton} - Ubicación: ${datos.ubicacionPorton}`,
    );
  }

  lineas.push("");
  lineas.push(`Observaciones: ${datos.observaciones.trim() || "-"}`);

  return lineas.join("\n");
}

export default function FormularioObra() {
  const [datos, setDatos] = useState<DatosObra>(DATOS_INICIALES);
  const [errores, setErrores] = useState<ErroresObra>({});

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "";
  const email = process.env.NEXT_PUBLIC_EMAIL || "";

  const set = <K extends keyof DatosObra>(campo: K, valor: DatosObra[K]) => {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
  };

  const validarYObtenerMensaje = (): string | null => {
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return null;
    return construirMensaje(datos);
  };

  const handleEnviarWhatsApp = (event: FormEvent) => {
    event.preventDefault();
    const mensaje = validarYObtenerMensaje();
    if (!mensaje) return;
    const url = buildWhatsAppUrl(whatsapp, mensaje);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEnviarEmail = () => {
    const mensaje = validarYObtenerMensaje();
    if (!mensaje) return;
    const asunto = encodeURIComponent("Solicitud de presupuesto");
    const url = email
      ? `mailto:${email}?subject=${asunto}&body=${encodeURIComponent(mensaje)}`
      : "#";
    window.open(url, "_self");
  };

  return (
    <section id="presupuesto" className="bg-fondo-claro py-16 md:py-24">
      <Container>
        <div className="rounded-xl border border-carbon/10 border-t-4 border-t-rojo bg-white p-6 shadow-sm md:p-10">
          <h2 className="font-display text-3xl font-semibold text-carbon md:text-4xl">
            Solicitá tu <span className="text-rojo">presupuesto</span>
          </h2>
          <p className="mt-3 font-sans text-gris-texto">
            Son unos minutos, y con esos datos armamos un presupuesto cerrado,
            sin necesidad de visitarte primero.
          </p>

          <form
            onSubmit={handleEnviarWhatsApp}
            noValidate
            className="mt-8 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Nombre"
                htmlFor="obra-nombre"
                required
                error={errores.nombre}
              >
                <TextInput
                  id="obra-nombre"
                  invalid={!!errores.nombre}
                  value={datos.nombre}
                  onChange={(e) => set("nombre", e.target.value)}
                />
              </Field>
              <Field
                label="Apellido"
                htmlFor="obra-apellido"
                required
                error={errores.apellido}
              >
                <TextInput
                  id="obra-apellido"
                  invalid={!!errores.apellido}
                  value={datos.apellido}
                  onChange={(e) => set("apellido", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Correo electrónico"
                htmlFor="obra-email"
                required
                error={errores.email}
              >
                <TextInput
                  id="obra-email"
                  type="email"
                  invalid={!!errores.email}
                  value={datos.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>
              <Field label="Teléfono" htmlFor="obra-telefono">
                <TextInput
                  id="obra-telefono"
                  type="tel"
                  value={datos.telefono}
                  onChange={(e) => set("telefono", e.target.value)}
                />
              </Field>
            </div>

            <Field
              label="Dirección de obra"
              htmlFor="obra-direccion"
              required
              error={errores.direccionObra}
            >
              <TextInput
                id="obra-direccion"
                invalid={!!errores.direccionObra}
                value={datos.direccionObra}
                onChange={(e) => set("direccionObra", e.target.value)}
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Localidad"
                htmlFor="obra-localidad"
                required
                error={errores.localidad}
              >
                <TextInput
                  id="obra-localidad"
                  invalid={!!errores.localidad}
                  value={datos.localidad}
                  onChange={(e) => set("localidad", e.target.value)}
                />
              </Field>
              <Field label="Código postal" htmlFor="obra-cp">
                <TextInput
                  id="obra-cp"
                  value={datos.codigoPostal}
                  onChange={(e) => set("codigoPostal", e.target.value)}
                />
              </Field>
            </div>

            <Field
              label="Tipo de tejido"
              htmlFor="obra-tejido"
              required
              error={errores.tejido}
            >
              <RadioCards
                label="Tipo de tejido"
                options={OPCIONES_TEJIDO}
                value={datos.tejido}
                onChange={(valor) => set("tejido", valor)}
                columns={3}
              />
            </Field>

            <Field
              label="Tipo de poste"
              htmlFor="obra-poste"
              required
              error={errores.poste}
            >
              <RadioCards
                label="Tipo de poste"
                options={OPCIONES_POSTE}
                value={datos.poste}
                onChange={(valor) => set("poste", valor)}
                columns={2}
              />
            </Field>

            <Field
              label="Tipo de malla"
              htmlFor="obra-malla"
              required
              error={errores.malla}
            >
              <RadioCards
                label="Tipo de malla"
                options={OPCIONES_MALLA}
                value={datos.malla}
                onChange={(valor) => set("malla", valor)}
                columns={4}
              />
            </Field>

            <Field
              label="Tipo de terreno"
              htmlFor="obra-terreno"
              required
              error={errores.terreno}
            >
              <RadioCards
                label="Tipo de terreno"
                options={OPCIONES_TERRENO}
                value={datos.terreno}
                onChange={(valor) => set("terreno", valor)}
                columns={2}
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field
                label="Frente (m)"
                htmlFor="obra-frente"
                required
                error={errores.frente}
              >
                <TextInput
                  id="obra-frente"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  invalid={!!errores.frente}
                  value={datos.frente}
                  onChange={(e) => set("frente", e.target.value)}
                />
              </Field>
              <Field
                label="Lateral (m)"
                htmlFor="obra-lateral"
                required
                error={errores.lateral}
              >
                <TextInput
                  id="obra-lateral"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  invalid={!!errores.lateral}
                  value={datos.lateral}
                  onChange={(e) => set("lateral", e.target.value)}
                />
              </Field>
              <Field
                label="Fondo (m)"
                htmlFor="obra-fondo"
                required
                error={errores.fondo}
              >
                <TextInput
                  id="obra-fondo"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  invalid={!!errores.fondo}
                  value={datos.fondo}
                  onChange={(e) => set("fondo", e.target.value)}
                />
              </Field>
            </div>

            <label
              htmlFor="obra-incluye-porton"
              className="flex items-center gap-3 font-sans text-carbon"
            >
              <input
                id="obra-incluye-porton"
                type="checkbox"
                className="size-5 accent-rojo"
                checked={datos.incluyePorton}
                onChange={(e) => set("incluyePorton", e.target.checked)}
              />
              ¿Incluye portón?
            </label>

            {datos.incluyePorton && (
              <>
                <Field
                  label="Tipo de portón"
                  htmlFor="obra-tipo-porton"
                  required
                  error={errores.tipoPorton}
                >
                  <RadioCards
                    label="Tipo de portón"
                    options={OPCIONES_TIPO_PORTON}
                    value={datos.tipoPorton}
                    onChange={(valor) => set("tipoPorton", valor)}
                    columns={2}
                  />
                </Field>

                <Field
                  label="Ubicación del portón"
                  htmlFor="obra-ubicacion-porton"
                  required
                  error={errores.ubicacionPorton}
                >
                  <RadioCards
                    label="Ubicación del portón"
                    options={OPCIONES_UBICACION_PORTON}
                    value={datos.ubicacionPorton}
                    onChange={(valor) => set("ubicacionPorton", valor)}
                    columns={3}
                  />
                </Field>
              </>
            )}

            <Field
              label="Observaciones (opcional)"
              htmlFor="obra-observaciones"
            >
              <TextArea
                id="obra-observaciones"
                value={datos.observaciones}
                onChange={(e) => set("observaciones", e.target.value)}
              />
            </Field>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                type="submit"
                variant="primary"
                icon={<MessageCircle size={20} aria-hidden="true" />}
              >
                Enviar por WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleEnviarEmail}
                icon={
                  <Mail size={20} className="text-rojo" aria-hidden="true" />
                }
              >
                Enviar por email
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
