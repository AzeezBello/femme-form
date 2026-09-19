"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery({ images }: { images: StaticImageData[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group block overflow-hidden"
            aria-label={`Open lookbook image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Femme Form lookbook image ${i + 1}`}
              className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
              placeholder="blur"
              sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 text-white/80 hover:text-white"
            onClick={close}
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`Femme Form lookbook image ${activeIndex + 1}`}
              className="max-h-[85vh] w-full object-contain"
              placeholder="blur"
              sizes="100vw"
              priority
            />
          </div>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  );
}
