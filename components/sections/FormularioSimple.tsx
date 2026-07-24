"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Field from "@/components/ui/form/Field";
import TextInput from "@/components/ui/form/TextInput";
import TextArea from "@/components/ui/form/TextArea";
import InfoOficina from "@/components/sections/InfoOficina";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface DatosSimple {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  mensaje: string;
}

type ErroresSimple = Partial<Record<keyof DatosSimple, string>>;

const DATOS_INICIALES: DatosSimple = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  mensaje: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(datos: DatosSimple): ErroresSimple {
  const errores: ErroresSimple = {};

  if (!datos.nombre.trim()) errores.nombre = "Ingresá tu nombre completo.";
  if (!datos.email.trim()) errores.email = "Ingresá tu email.";
  else if (!EMAIL_REGEX.test(datos.email.trim())) errores.email = "Ingresá un email válido.";
  if (!datos.telefono.trim()) errores.telefono = "Ingresá tu teléfono.";
  if (!datos.mensaje.trim()) errores.mensaje = "Contanos brevemente sobre tu proyecto.";

  return errores;
}

function construirMensaje(datos: DatosSimple): string {
  const lineas = [
    "Consulta desde la web - Alambrar",
    "",
    `Nombre: ${datos.nombre}`,
    `Email: ${datos.email}`,
    `Teléfono: ${datos.telefono}`,
  ];

  if (datos.empresa.trim()) lineas.push(`Empresa: ${datos.empresa}`);

  lineas.push("", "Proyecto:", datos.mensaje);

  return lineas.join("\n");
}

export default function FormularioSimple() {
  const [datos, setDatos] = useState<DatosSimple>(DATOS_INICIALES);
  const [errores, setErrores] = useState<ErroresSimple>({});

  const whatsappVentas = process.env.NEXT_PUBLIC_WHATSAPP_VENTAS || "";
  const telefonoOficina = process.env.NEXT_PUBLIC_TELEFONO || "";

  const handleChange = (campo: keyof DatosSimple, valor: string) => {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    const mensaje = construirMensaje(datos);
    const url = buildWhatsAppUrl(whatsappVentas, mensaje);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-carbon md:text-4xl">
              Dejanos tus datos
            </h2>
            <p className="mt-2 font-sans text-gris-texto">Te respondemos a la brevedad.</p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
              <Field
                label="Nombre completo"
                htmlFor="simple-nombre"
                required
                error={errores.nombre}
              >
                <TextInput
                  id="simple-nombre"
                  name="nombre"
                  invalid={!!errores.nombre}
                  value={datos.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                />
              </Field>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Email" htmlFor="simple-email" required error={errores.email}>
                  <TextInput
                    id="simple-email"
                    name="email"
                    type="email"
                    invalid={!!errores.email}
                    value={datos.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </Field>

                <Field
                  label="Teléfono"
                  htmlFor="simple-telefono"
                  required
                  error={errores.telefono}
                >
                  <TextInput
                    id="simple-telefono"
                    name="telefono"
                    type="tel"
                    invalid={!!errores.telefono}
                    value={datos.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                  />
                </Field>
              </div>

              <Field label="Empresa (opcional)" htmlFor="simple-empresa">
                <TextInput
                  id="simple-empresa"
                  name="empresa"
                  value={datos.empresa}
                  onChange={(e) => handleChange("empresa", e.target.value)}
                />
              </Field>

              <Field
                label="Contanos sobre tu proyecto"
                htmlFor="simple-mensaje"
                required
                error={errores.mensaje}
              >
                <TextArea
                  id="simple-mensaje"
                  name="mensaje"
                  invalid={!!errores.mensaje}
                  value={datos.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                />
              </Field>

              <Button
                type="submit"
                variant="whatsapp"
                icon={<MessageCircle size={20} aria-hidden="true" />}
              >
                Enviar por WhatsApp
              </Button>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  href={buildWhatsAppUrl(whatsappVentas)}
                  icon={<MessageCircle size={20} aria-hidden="true" />}
                >
                  WhatsApp directo
                </Button>
                <Button
                  variant="outline"
                  href={`tel:${telefonoOficina}`}
                  icon={<Phone size={20} aria-hidden="true" />}
                >
                  Llamar
                </Button>
              </div>
            </form>
          </div>

          <InfoOficina />
        </div>
      </Container>
    </section>
  );
}
