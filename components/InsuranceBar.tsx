"use client";
import Image from "next/image";
import Link from "next/link";

export default function InsuranceBar() {
  const logos = [
    { src: "/cigna.png", alt: "Cigna" },
    { src: "/delta-dental.png", alt: "Delta Dental" },
    { src: "/Dental-Care-Plus-Group.png", alt: "The Dental Care Plus Group" },
    { src: "/metlife.png", alt: "MetLife" },
  ];

  return (
    <section id="insurance" className="relative py-16 md:py-18 lg:py-20 text-center">
      <div className="container-xl">
        <h2 className="font-serif text-[36px] md:text-[40px] leading-tight font-semibold text-[color:var(--brand-gold)]">
          Simple Affordable Payment Options
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-[15px] md:text-[16px] leading-7 text-[color:var(--text-dark)]">
          Our office accepts most major insurance plans. Our team is knowledgeable about dental insurance too, so we’re
          happy to file and track your claims for you to ensure that you’re getting the most out of your benefits. We just ask
          that you bring your insurance card to each appointment, so we can make sure your information is as up-to-date as
          possible.
        </p>

        <div className="mt-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 text-[13px] font-semibold border"
            style={{ borderColor: "var(--brand-gold)", color: "var(--text-dark)" }}
          >
            Financial &amp; Insurance Information
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-10 md:grid-cols-4">
          {logos.map((l) => (
            <div key={l.alt} className="flex h-[56px] w-[180px] items-center justify-center">
              <Image
                src={l.src}
                alt={l.alt}
                width={180}
                height={56}
                className="max-h-[56px] w-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
