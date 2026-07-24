"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useRef } from "react";

export interface RadioCardOption {
  value: string;
  label: string;
  image?: ReactNode;
}

type Columns = 2 | 3 | 4;

const colsClasses: Record<Columns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

interface RadioCardsProps {
  label: string;
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  columns?: Columns;
}

export default function RadioCards({
  label,
  options,
  value,
  onChange,
  columns = 3,
}: RadioCardsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusAndSelect = (index: number) => {
    const target = options[index];
    if (!target) return;
    refs.current[index]?.focus();
    onChange(target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusAndSelect((index + 1) % options.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusAndSelect((index - 1 + options.length) % options.length);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={`grid grid-cols-1 gap-3 ${colsClasses[columns]}`}
    >
      {options.map((option, index) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected || (!value && index === 0) ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`flex flex-col items-center gap-2 rounded-xl border-[1.5px] bg-white p-3 text-center font-sans text-sm text-carbon transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo ${
              selected ? "border-rojo" : "border-carbon/20"
            }`}
          >
            {option.image}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
