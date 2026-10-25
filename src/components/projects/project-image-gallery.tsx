"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectImageGalleryProps = {
  title: string;
  images: string[];
};

export default function ProjectImageGallery({
  title,
  images,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="mt-10 sm:mt-14">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] sm:aspect-[16/9]">
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous project image"
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:left-5 sm:size-12"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next project image"
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:right-5 sm:size-12"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>

            <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:bottom-5 sm:right-5">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div
          className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5"
          aria-label="Project image thumbnails"
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 bg-[var(--surface-muted)] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                activeIndex === index
                  ? "border-[var(--primary)]"
                  : "border-[var(--border)] opacity-75 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 639px) 30vw, 20vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
