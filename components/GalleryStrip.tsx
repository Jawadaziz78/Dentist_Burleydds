"use client";

/**
 * Single full-bleed image strip, like the hero (no side gaps).
 * Uses /public/back.png — change src if your filename differs.
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
      {/* 16:9 on small; taller on desktop; adjust as you like */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/back.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
