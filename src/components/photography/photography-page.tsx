"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

const placeholderPhotos = [
  {
    id: 1,
    src: "/photos/MJJ07654.jpg",
    alt: "Yosemite Valley",
    caption: "Tunnel View, Yosemite",
    aspect: "landscape" as const,
  },
  {
    id: 2,
    src: "/photos/MJB04623.jpg",
    alt: "Brooklyn Bridge",
    caption: "Brooklyn Bridge, NYC",
    aspect: "portrait" as const,
  },
  {
    id: 3,
    src: "/photos/MJB01198.jpg",
    alt: "Pinnacles caves",
    caption: "Pinnacles National Park",
    aspect: "portrait" as const,
  },
  {
    id: 4,
    src: "/photos/MJJ07435.jpg",
    alt: "San Francisco skyline",
    caption: "SF skyline at golden hour",
    aspect: "landscape" as const,
  },
  {
    id: 5,
    src: "/photos/MJB04707.jpg",
    alt: "Times Square at night",
    caption: "Times Square, NYC",
    aspect: "portrait" as const,
  },
  {
    id: 6,
    src: "/photos/MJB01809-Enhanced-NR.jpg",
    alt: "BMW at sunset",
    caption: "Santa Cruz coast",
    aspect: "portrait" as const,
  },
  {
    id: 7,
    src: "/photos/MJB04586.jpg",
    alt: "Couple at Times Square",
    caption: "Times Square, NYC",
    aspect: "portrait" as const,
  },
  {
    id: 8,
    src: "/photos/MJB04676.jpg",
    alt: "Times Square billboards",
    caption: "Times Square, NYC",
    aspect: "portrait" as const,
  },
  {
    id: 9,
    src: "/photos/MJB04547.jpg",
    alt: "Cherry blossoms",
    caption: "Cherry blossoms, NYC",
    aspect: "portrait" as const,
  },
  {
    id: 10,
    src: "/photos/MJJ08252.jpg",
    alt: "Sunset over the hills",
    caption: "Big Sur coastline",
    aspect: "portrait" as const,
  },
  {
    id: 11,
    src: "/photos/MJB00444.jpg",
    alt: "Lion dance performance",
    caption: "VSA at UCD, lion dance",
    aspect: "portrait" as const,
  },
  {
    id: 12,
    src: "/photos/collin3is-183.jpg",
    alt: "Lexus IS at night",
    caption: "Night shoot",
    aspect: "portrait" as const,
  },
];

type Photo = (typeof placeholderPhotos)[number];

export function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const openPhoto = (photo: Photo, idx: number) => {
    setSelectedPhoto(photo);
    setSelectedIdx(idx);
  };

  const closePhoto = useCallback(() => setSelectedPhoto(null), []);

  const goNext = useCallback(() => {
    const next = (selectedIdx + 1) % placeholderPhotos.length;
    setSelectedIdx(next);
    setSelectedPhoto(placeholderPhotos[next]);
  }, [selectedIdx]);

  const goPrev = useCallback(() => {
    const prev = (selectedIdx - 1 + placeholderPhotos.length) % placeholderPhotos.length;
    setSelectedIdx(prev);
    setSelectedPhoto(placeholderPhotos[prev]);
  }, [selectedIdx]);

  useEffect(() => {
    if (!selectedPhoto) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedPhoto, closePhoto, goNext, goPrev]);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pt-24 pb-24 md:pt-32">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Photography
        </h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <p className="mt-4 max-w-lg text-base text-muted-foreground">
          see how I perceive life through my lens. Shot on Sony A7III. @mjsvisualz on IG
        </p>
      </BlurFade>

      {/* True masonry grid — no aspect ratio forcing, images natural height */}
      <div className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
        {placeholderPhotos.map((photo, idx) => (
          <BlurFade key={photo.id} delay={BLUR_FADE_DELAY * 5 + idx * 0.05}>
            <button
              onClick={() => openPhoto(photo, idx)}
              className="group relative mb-3 block w-full overflow-hidden focus:outline-none"
              aria-label={`Open ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={photo.aspect === "landscape" ? 600 : photo.aspect === "portrait" ? 1067 : 800}
                className="w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Caption — slides up on hover only */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs font-medium text-white/90 tracking-wide">{photo.caption}</p>
              </div>
            </button>
          </BlurFade>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onClick={closePhoto}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={closePhoto}
            className="absolute top-5 right-5 z-10 text-white/60 transition-colors hover:text-white"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 transition-colors hover:text-white"
            aria-label="Previous"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 transition-colors hover:text-white"
            aria-label="Next"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1600}
              height={selectedPhoto.aspect === "landscape" ? 1200 : selectedPhoto.aspect === "portrait" ? 2133 : 1600}
              className="max-h-[90vh] max-w-[92vw] w-auto h-auto object-contain"
              priority
            />
            <p className="mt-3 text-center text-xs text-white/50 tracking-wide">
              {selectedPhoto.caption}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest">
            {selectedIdx + 1} / {placeholderPhotos.length}
          </div>
        </div>
      )}
    </div>
  );
}
