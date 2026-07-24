import type { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export default function TextInput({ invalid, className = "", ...props }: TextInputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={`h-11 rounded-md border-[0.5px] bg-white px-3 font-sans text-carbon placeholder:text-gris-texto/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo ${
        invalid ? "border-rojo" : "border-carbon/20"
      } ${className}`}
      {...props}
    />
  );
}
