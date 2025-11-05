/* eslint-disable @next/next/no-img-element */
"use client";

/**
 * Full‑bleed gallery section (static).
 * Intentionally does NOT rotate or animate.
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
          alt="Gallery image"
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
