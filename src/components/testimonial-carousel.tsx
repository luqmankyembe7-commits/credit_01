"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/types";
import { Button } from "@/components/ui/button";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  if (!item) return null;

  function step(direction: -1 | 1) {
    setIndex((current) => (current + direction + items.length) % items.length);
  }

  return (
    <div
      className="rounded-3xl bg-forest-deep px-6 py-8 text-[#f7f3ea] sm:px-10 sm:py-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Illustrative member stories"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wheat">
        Sample stories · TBC
      </p>
      <blockquote className="mt-6" aria-live="polite">
        <p className="max-w-3xl text-2xl font-semibold leading-snug text-balance sm:text-4xl">
          “{item.quote}”
        </p>
        <footer className="mt-6 text-base text-[#e7f0ea]">
          <span className="font-semibold text-[#f7f3ea]">{item.name}</span>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          {item.detail}
        </footer>
      </blockquote>
      <div className="mt-8 flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="rounded-full border-[#f6e7c1]! bg-transparent! text-[#f7f3ea]! hover:bg-[#145c38]! hover:text-[#f7f3ea]!"
          onClick={() => step(-1)}
          aria-label="Previous story"
        >
          <ChevronLeft />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="rounded-full border-[#f6e7c1]! bg-transparent! text-[#f7f3ea]! hover:bg-[#145c38]! hover:text-[#f7f3ea]!"
          onClick={() => step(1)}
          aria-label="Next story"
        >
          <ChevronRight />
        </Button>
        <p className="ml-2 text-sm text-[#e7f0ea]">
          {index + 1} of {items.length}
        </p>
      </div>
    </div>
  );
}
