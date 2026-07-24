"use client";

import { PointerEvent as ReactPointerEvent, RefObject, useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface UseAutoScrollDragOptions {
  speed?: number;
  pauseOnHover?: boolean;
}

interface UseAutoScrollDragResult {
  reducedMotion: boolean;
  handlers: {
    onPointerDown?: (event: ReactPointerEvent<HTMLElement>) => void;
    onPointerMove?: (event: ReactPointerEvent<HTMLElement>) => void;
    onPointerUp?: (event: ReactPointerEvent<HTMLElement>) => void;
    onPointerCancel?: (event: ReactPointerEvent<HTMLElement>) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
}

function safeReleasePointerCapture(el: HTMLElement, pointerId: number) {
  try {
    if (el.hasPointerCapture(pointerId)) {
      el.releasePointerCapture(pointerId);
    }
  } catch {
    // El puntero puede haber desaparecido.
  }
}

export function useAutoScrollDrag(
  ref: RefObject<HTMLElement | null>,
  { speed = 40, pauseOnHover = false }: UseAutoScrollDragOptions = {}
): UseAutoScrollDragResult {
  const draggingRef = useRef(false);
  const hoveredRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const normalize = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
        startScrollLeftRef.current -= half;
      } else if (el.scrollLeft < 0) {
        el.scrollLeft += half;
        startScrollLeftRef.current += half;
      }
    };

    let frameId: number;
    let lastTime: number | null = null;

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!draggingRef.current && !(pauseOnHover && hoveredRef.current)) {
        el.scrollLeft += (speed * delta) / 1000;
        normalize();
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [ref, speed, pauseOnHover, reducedMotion]);

  if (reducedMotion) {
    return { reducedMotion, handlers: {} };
  }

  const handlers: UseAutoScrollDragResult["handlers"] = {
    onPointerDown: (event) => {
      const el = ref.current;
      if (!el) return;
      draggingRef.current = true;
      startXRef.current = event.clientX;
      startScrollLeftRef.current = el.scrollLeft;
      activePointerIdRef.current = event.pointerId;
      try {
        el.setPointerCapture(event.pointerId);
      } catch {
        // El drag funciona igual con la matemática de scrollLeft.
      }
    },
    onPointerMove: (event) => {
      const el = ref.current;
      if (!el || !draggingRef.current || event.pointerId !== activePointerIdRef.current) return;
      const dx = event.clientX - startXRef.current;
      el.scrollLeft = startScrollLeftRef.current - dx;

      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
          startScrollLeftRef.current -= half;
        } else if (el.scrollLeft < 0) {
          el.scrollLeft += half;
          startScrollLeftRef.current += half;
        }
      }
    },
    onPointerUp: (event) => {
      const el = ref.current;
      draggingRef.current = false;
      if (el && event.pointerId === activePointerIdRef.current) {
        safeReleasePointerCapture(el, event.pointerId);
      }
      activePointerIdRef.current = null;
    },
    onPointerCancel: (event) => {
      const el = ref.current;
      draggingRef.current = false;
      if (el && event.pointerId === activePointerIdRef.current) {
        safeReleasePointerCapture(el, event.pointerId);
      }
      activePointerIdRef.current = null;
    },
  };

  if (pauseOnHover) {
    handlers.onMouseEnter = () => {
      hoveredRef.current = true;
    };
    handlers.onMouseLeave = () => {
      hoveredRef.current = false;
    };
  }

  return { reducedMotion, handlers };
}
