/* eslint-disable @next/next/no-img-element */
"use client";

/**
 * Full-bleed hero section with responsive image.
 * Uses /public/back.png — update src if needed.
 */
export default function GalleryStrip() {
  return (
    <section
      id="gallery"
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        overflow-hidden bg-[color:var(--off-white)]
      "
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1]">
        <img
          src="/back.png"
          alt="Dentist Hero"
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
