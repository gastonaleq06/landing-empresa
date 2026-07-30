import { ImageIcon } from "lucide-react";

type Aspect = "4/3" | "1/1" | "full";

const aspectClasses: Record<Aspect, string> = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  full: "h-full",
};

type Tone = "default" | "on-dark" | "plain";

const toneClasses: Record<Tone, { box: string; text: string }> = {
  default: {
    box: "border-[0.5px] border-dashed border-carbon/20 bg-fondo-claro",
    text: "text-gris-texto",
  },
  "on-dark": {
    box: "border-[0.5px] border-dashed border-white/40 bg-white/10",
    text: "text-white",
  },
  plain: { box: "", text: "text-gris-texto" },
};

interface PlaceholderProps {
  label?: string;
  aspect?: Aspect;
  tone?: Tone;
  className?: string;
}

export default function Placeholder({
  label,
  aspect = "4/3",
  tone = "default",
  className = "",
}: PlaceholderProps) {
  const { box, text } = toneClasses[tone];

  return (
    <div
      className={`flex ${aspectClasses[aspect]} flex-col items-center justify-center gap-2 rounded-xl p-4 ${box} ${className}`}
    >
      <ImageIcon className={text} size={32} aria-hidden="true" />
      {label && <span className={`text-center font-sans text-sm ${text}`}>{label}</span>}
    </div>
  );
}
