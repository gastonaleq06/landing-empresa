import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons/SocialIcons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ContactLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  external?: boolean;
}

function ContactLink({ href, icon: Icon, label, external }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <Icon size={16} className="shrink-0" aria-hidden="true" />
      {label}
    </a>
  );
}

export default function Footer() {
  const whatsappVentasNum = process.env.NEXT_PUBLIC_WHATSAPP_VENTAS ?? "";
  const whatsappObrasNum = process.env.NEXT_PUBLIC_WHATSAPP_OBRAS ?? "";
  const whatsappAdminNum = process.env.NEXT_PUBLIC_WHATSAPP_ADMIN ?? "";
  const telefono = process.env.NEXT_PUBLIC_TELEFONO ?? "";
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "";
  const direccion = process.env.NEXT_PUBLIC_DIRECCION ?? "";
  const mapsUrl = process.env.NEXT_PUBLIC_MAPS_URL ?? "";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "";

  const contactos: ContactLinkProps[] = [];
  if (whatsappVentasNum) {
    contactos.push({
      label: "WhatsApp Ventas",
      href: buildWhatsAppUrl(whatsappVentasNum),
      icon: MessageCircle,
      external: true,
    });
  }
  if (whatsappObrasNum) {
    contactos.push({
      label: "WhatsApp Obras",
      href: buildWhatsAppUrl(whatsappObrasNum),
      icon: MessageCircle,
      external: true,
    });
  }
  if (whatsappAdminNum) {
    contactos.push({
      label: "WhatsApp Administración",
      href: buildWhatsAppUrl(whatsappAdminNum),
      icon: MessageCircle,
      external: true,
    });
  }
  if (telefono) {
    contactos.push({ label: telefono, href: `tel:${telefono}`, icon: Phone });
  }
  if (email) {
    contactos.push({ label: email, href: `mailto:${email}`, icon: Mail });
  }

  return (
    <footer id="contacto" className="bg-carbon text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 font-sans text-sm text-white/70">
              Cercos, portones y seguridad perimetral en Salta.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-white/90 uppercase">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3 font-sans text-sm">
              {contactos.map((contacto) => (
                <li key={contacto.label}>
                  <ContactLink {...contacto} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-white/90 uppercase">
              Ubicación
            </h3>
            <div className="mt-4 flex flex-col gap-3 font-sans text-sm">
              {direccion && (
                <p className="flex items-start gap-2 text-white/80">
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {direccion}
                </p>
              )}
              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Cómo llegar
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-white/90 uppercase">
              Redes
            </h3>
            <div className="mt-4 flex gap-4">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Alambrar SRL"
                  className="text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <InstagramIcon size={22} aria-hidden="true" />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Alambrar SRL"
                  className="text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <FacebookIcon size={22} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-[0.5px] border-white/20 pt-6 font-sans text-xs text-white/60">
          © {new Date().getFullYear()} Alambrar SRL. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
