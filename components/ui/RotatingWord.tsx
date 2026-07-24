"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Strong ease-out for the incoming word (starts fast, feels responsive).
const ENTER_EASE = "cubic-bezier(0.23, 1, 0.32, 1)";
const ENTER_MS = 350;
// ease-in for the outgoing word only — exits should never use ease-out.
const EXIT_EASE = "cubic-bezier(0.55, 0, 1, 0.45)";
const EXIT_MS = 300;

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
  // Renders as its own centered line instead of flowing inline. Use this
  // whenever text follows the rotating word on the same line — otherwise the
  // width reserved for the longest word leaves a gap before that text.
  block?: boolean;
}

export default function RotatingWord({
  words,
  interval = 2500,
  className = "",
  block = false,
}: RotatingWordProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const lastActiveIndex = useRef(activeIndex);
  const reducedMotion = usePrefersReducedMotion();
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  // Updater functions must stay pure (React double-invokes them in dev), so
  // prevIndex is derived here instead of as a side effect of setActiveIndex.
  useEffect(() => {
    setPrevIndex(lastActiveIndex.current);
    lastActiveIndex.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (reducedMotion || words.length < 2) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval, reducedMotion]);

  if (reducedMotion) {
    return <span className={block ? `block text-center ${className}` : className}>{words[0]}</span>;
  }

  const rootClassName = block
    ? "relative mx-auto grid w-fit overflow-hidden"
    : "relative inline-grid overflow-hidden align-baseline";

  return (
    <span className={rootClassName} aria-live="off">
      {/* Invisible ghost reserves the width/height of the longest word so the sentence never reflows. */}
      <span
        className={`invisible col-start-1 row-start-1 whitespace-nowrap ${className}`}
        aria-hidden="true"
      >
        {longest}
      </span>
      {words.map((word, i) => {
        const isActive = i === activeIndex;
        const isExiting = i === prevIndex;
        // All three words stay mounted permanently; only their transform/opacity
        // move between "waiting below", "active", and "exiting above". This
        // avoids mount/unmount choreography entirely — no exit-callback bugs.
        const style: CSSProperties = isActive
          ? {
              opacity: 1,
              transform: "translateY(0)",
              transition: `opacity ${ENTER_MS}ms ${ENTER_EASE}, transform ${ENTER_MS}ms ${ENTER_EASE}`,
            }
          : isExiting
            ? {
                opacity: 0,
                transform: "translateY(-14px)",
                transition: `opacity ${EXIT_MS}ms ${EXIT_EASE}, transform ${EXIT_MS}ms ${EXIT_EASE}`,
              }
            : { opacity: 0, transform: "translateY(14px)", transition: "none" };

        return (
          <span
            key={word}
            aria-hidden={isActive ? undefined : "true"}
            className={`col-start-1 row-start-1 whitespace-nowrap ${className}`}
            style={style}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
