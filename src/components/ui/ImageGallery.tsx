"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
};

export default function ImageGallery({ images, columns = 3 }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  };

  return (
    <>
      <div className={`my-8 grid gap-4 ${gridCols[columns]}`}>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-navy/5"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs text-white">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute right-4 top-4 text-3xl text-white/80 hover:text-white"
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              className="absolute left-4 text-4xl text-white/60 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
            >
              &#8249;
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded object-contain"
            />
            {images[lightboxIndex].caption && (
              <p className="mt-3 text-center text-sm text-white/70">
                {images[lightboxIndex].caption}
              </p>
            )}
          </div>

          {/* Next */}
          {lightboxIndex < images.length - 1 && (
            <button
              className="absolute right-4 text-4xl text-white/60 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
            >
              &#8250;
            </button>
          )}
        </div>
      )}
    </>
  );
}
