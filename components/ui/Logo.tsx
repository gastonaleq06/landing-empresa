import Link from "next/link";

type LogoVariant = "rojo" | "white";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

const variantStyles: Record<LogoVariant, { icon: string; title: string; subtitle: string }> = {
  rojo: { icon: "bg-rojo", title: "text-rojo", subtitle: "text-rojo/70" },
  white: { icon: "bg-white", title: "text-white", subtitle: "text-white/70" },
};

// logo-mark.png is a solid white isotype on a transparent background, used
// as a CSS mask so a single asset can render in any variant color — this
// keeps Logo the only place color changes for the mark (and the brand text
// next to it) need to happen.
export default function Logo({ className = "", variant = "rojo" }: LogoProps) {
  const styles = variantStyles[variant];

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-10 w-10 shrink-0 ${styles.icon}`}
        style={{
          maskImage: "url(/logo-mark.png)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(/logo-mark.png)",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      />
      <span className="flex flex-col justify-center">
        <span
          className={`font-display text-lg leading-tight font-semibold tracking-wide uppercase ${styles.title}`}
        >
          Alambrar
        </span>
        <span
          className={`mt-0.5 hidden text-[10px] leading-none font-medium tracking-widest uppercase sm:block ${styles.subtitle}`}
        >
          Alambres tejidos
        </span>
      </span>
    </Link>
  );
}
