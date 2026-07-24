"use client";

import { KeyboardEvent, ReactNode, useRef } from "react";
import { useAutoScrollDrag } from "@/lib/useAutoScrollDrag";

const AUTOPLAY_SPEED_PX_PER_SECOND = 40;
const DEFAULT_ITEM_CLASS = "w-[80%] shrink-0 sm:w-[55%] md:w-[38%] lg:w-[28%] xl:w-[22%]";

interface CarouselProps {
  children: ReactNode[];
  ariaLabel: string;
  itemClassName?: string;
}

export default function Carousel({ children, ariaLabel, itemClassName }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { handlers, reducedMotion } = useAutoScrollDrag(trackRef, {
    speed: AUTOPLAY_SPEED_PX_PER_SECOND,
    pauseOnHover: true,
  });

  const items = [...children, ...children];

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-item]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
  };

  return (
    <div
      ref={trackRef}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`no-scrollbar flex gap-6 overflow-x-auto pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rojo ${
        reducedMotion ? "touch-auto cursor-auto" : "touch-pan-y cursor-grab active:cursor-grabbing"
      }`}
      {...handlers}
    >
      {items.map((child, index) => {
        const isDuplicate = index >= children.length;
        return (
          <div
            key={index}
            data-carousel-item
            aria-hidden={isDuplicate || undefined}
            className={itemClassName ?? DEFAULT_ITEM_CLASS}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
