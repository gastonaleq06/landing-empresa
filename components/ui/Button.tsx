import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "whatsapp" | "outline" | "white" | "outline-white";

interface BaseProps {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-rojo text-white hover:bg-rojo-hover focus-visible:outline-rojo",
  whatsapp: "bg-whatsapp text-carbon hover:brightness-95 focus-visible:outline-rojo",
  outline: "bg-transparent text-carbon border border-carbon hover:bg-carbon/5 focus-visible:outline-rojo",
  // Ring color intentionally differs: white buttons only appear on rojo
  // backgrounds, where an outline-rojo ring would be invisible.
  white: "bg-white text-rojo hover:bg-white/90 focus-visible:outline-carbon",
  // For use over dark/photo backgrounds, where border-carbon would be invisible.
  "outline-white": "bg-transparent text-white border border-white hover:bg-white/10 focus-visible:outline-white",
};

const baseStyles =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 font-sans font-medium transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 hover:shadow-md motion-safe:active:translate-y-0 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {icon}
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
