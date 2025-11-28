"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type GalleryProps = {
  slug: string;
  images: string[] | undefined;
};

export default function Gallery({ slug, images }: GalleryProps) {
  const [index, setIndex] = useState<number>(0);
  console.log(index);

  function nextImage() {
    if (images) {
      if (index < images?.length - 1) {
        setIndex((index) => index + 1);
      }
    }
  }

  function prevImage() {
    if (images) {
      if (index > 0) {
        setIndex((index) => index - 1);
      }
    }
  }

  return (
    <section>
      <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-slate-200 dark:border-slate-800">
        Galeria
      </h2>
      <div className="relative mt-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          {images ? (
            <div className="h-full w-full object-cover">
              <Image
                alt="A website dashboard with charts and graphs on a laptop screen."
                src={images[index]}
                fill
              />
            </div>
          ) : (
            <ImagePlaceholder />
          )}
        </div>
        {images && (
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              className={`grid size-10 place-content-center rounded-full bg-white/50  backdrop-blur-sm transition  dark:bg-black/50 dark:text-white dark:hover:bg-black/75 ${
                index === 0
                  ? "text-gray-300"
                  : "text-slate-900 hover:bg-gray-200/75"
              }`}
              onClick={prevImage}
            >
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
            </button>
            <button
              className={`grid size-10 place-content-center rounded-full bg-white/50  backdrop-blur-sm transition  dark:bg-black/50 dark:text-white dark:hover:bg-black/75 ${
                index === images?.length - 1
                  ? "text-gray-300"
                  : "text-slate-900 hover:bg-gray-200/75"
              }`}
              onClick={nextImage}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
