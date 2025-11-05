"use client";
import Image from "next/image";
import Link from "next/link";

export default function InsuranceBar() {
  return (
    <section className="relative py-16 md:py-20 bg-white text-center">
      {/* Container has max-width of 4xl and safe padding of px-4 */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="font-serif text-[34px] md:text-[42px] font-bold leading-tight text-[#87622c]">
          Simple Affordable Payment Options
        </h2>

        {/* 1. DESKTOP-ONLY PARAGRAPH (Keeps your exact web look) */}
        <p className="
          mt-6 
          text-[16px] 
          leading-[1.75] 
          text-[#333333] 
          font-sans 
          hidden 
          md:block /* ONLY SHOW on desktop */
        ">
          {/* Preserves your exact line-breaking for the desktop view */}
          Our office accepts most major insurance plans. Our team is knowledgeable about dental insurance too, so we’re<br />
          happy to file and track your claims for you to ensure that you’re getting the most out of your benefits. We just ask<br />
          that you bring your insurance card to each appointment, so we can make sure your information is as up-to-date as<br />
          possible.
        </p>

        {/* 2. MOBILE-ONLY PARAGRAPH (FIXED: Now with text-justify) */}
        <p className="
          mt-6 
          text-[16px] 
          leading-relaxed      /* Better vertical spacing for mobile */
          text-[#333333] 
          font-sans
          mx-auto              /* Centers the text if it wraps short */
          text-justify         /* <--- ADDED THIS FOR JUSTIFIED TEXT */
          md:hidden            /* HIDE on desktop */
        ">
          {/* Text is a single block, allowing the browser to wrap naturally */}
          Our office accepts most major insurance plans. Our team is knowledgeable about dental insurance too, so we’re
          happy to file and track your claims for you to ensure that you’re getting the most out of your benefits. We just ask
          that you bring your insurance card to each appointment, so we can make sure your information is as up-to-date as
          possible.
        </p>
        
        {/* Button */}
        <div className="mt-10">
          <Link
            href="#"
            className="inline-block px-6 py-3 text-[16px] font-semibold font-serif border border-[#87622c] text-[#1e1e1e] bg-white hover:bg-[#87622c] hover:text-white transition-all duration-200"
          >
            Financial &amp; Insurance Information
          </Link>
        </div>

        {/* Logos row (restored) */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-10 md:grid-cols-4 no-view-transition">
          <div className="flex h-[56px] w-[180px] items-center justify-center">
            <Image
              src="/cigna.png"
              alt="Cigna"
              width={180}
              height={56}
              className="max-h-[56px] w-auto object-contain no-view-transition"
              priority
            />
          </div>
          <div className="flex h-[56px] w-[180px] items-center justify-center">
            <Image
              src="/delta-dental.png"
              alt="Delta Dental"
              width={180}
              height={56}
              className="max-h-[56px] w-auto object-contain no-view-transition"
              priority
            />
          </div>
          <div className="flex h-[56px] w-[180px] items-center justify-center">
            <Image
              src="/Dental-Care-Plus.png"
              alt="The Dental Care Plus Group"
              width={180}
              height={56}
              className="max-h-[56px] w-auto object-contain no-view-transition"
              priority
            />
          </div>
          <div className="flex h-[56px] w-[180px] items-center justify-center">
            <Image
              src="/metlife.png"
              alt="MetLife"
              width={180}
              height={56}
              className="max-h-[56px] w-auto object-contain no-view-transition"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
