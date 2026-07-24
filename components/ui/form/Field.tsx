import type { ReactNode } from "react";

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Field({
  label,
  htmlFor,
  error,
  required,
  children,
  className = "",
}: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="font-sans text-sm font-medium text-carbon">
        {label}
        {required && <span className="text-rojo"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="font-sans text-sm text-rojo">
          {error}
        </p>
      )}
    </div>
  );
}
