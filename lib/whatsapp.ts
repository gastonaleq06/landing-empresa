export function buildWhatsAppUrl(numero: string, mensaje?: string): string {
  if (!numero) return "#";
  const base = `https://wa.me/${numero}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
