import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

// logo-mark.png is the isotype cut out of public/logo.png with a transparent
// background — the original has a solid #E10019 square baked in, which
// doesn't match the site's rojo (#C42126) and shows a visible seam.
export default function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="Alambrar SRL"
        width={40}
        height={40}
        priority={priority}
        className="h-10 w-10"
      />
    </Link>
  );
}
