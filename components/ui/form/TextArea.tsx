import type { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export default function TextArea({
  invalid,
  className = "",
  rows = 4,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid || undefined}
      className={`rounded-md border-[0.5px] bg-white px-3 py-2 font-sans text-carbon placeholder:text-gris-texto/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo ${
        invalid ? "border-rojo" : "border-carbon/20"
      } ${className}`}
      {...props}
    />
  );
}
