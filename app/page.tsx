/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

import GalleryStrip from "@/components/GalleryStrip";
import InsuranceBar from "@/components/InsuranceBar";

const HERO_IMAGES = ["/hero-slide-1.jpg", "/hero-slide-2.jpg"] as const;
const HERO_CHANGE_INTERVAL_MS = 8000;

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WelcomeSection />
      <GalleryStrip />
      <InsuranceBar />
    </>
  );
}

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, HERO_CHANGE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden font-serif"
      style={{ minHeight: '600px', maxHeight: '80vh' }}
    >
      {/* Background layer - previous image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={HERO_IMAGES[(currentImageIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length]}
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
      </div>

      {/* Foreground layer - current image */}
      <div key={currentImageIndex} className="absolute inset-0 -z-10 animate-hero-fade">
        <img
          src={HERO_IMAGES[currentImageIndex]}
          alt="Dental background image"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-5 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-54 text-center">
       <h1 className="font-serif text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.2] drop-shadow-lg">

          Feel At Home With a Relaxing Dental
          <br />
          Experience.
        </h1>

        <p className="mt-6 text-white text-[20px] sm:text-[30px] md:text-[34px] font-bold drop-shadow-md">
          Proudly Serving Cincinnati, Batavia, and Lebanon
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#doctors"
            className="px-8 py-3 border-2 border-white bg-transparent !text-white text-[18px] sm:text-[24px] font-bold transition-colors duration-200 hover:bg-white hover:!text-[#6B4A1A] focus:bg-white focus:!text-[#6B4A1A]"
          >
            Meet Our Doctors
          </a>

          <a
            href="#appointment"
            className="px-8 py-3 border-2 border-white bg-transparent !text-white text-[18px] sm:text-[24px] font-bold transition-colors duration-200 hover:bg-white hover:!text-[#6B4A1A] focus:bg-white focus:!text-[#6B4A1A]"
          >
            Make An Appointment
          </a>

        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const items = [
    {
      title: "Need Urgent Dental Care?",
      body:
        "We offer quick assessments and fast referrals. We'll prioritize getting you an exam and guiding you to the right treatment—whether in our office or with one of our trusted specialists.",
      cta: "Emergency Dentistry",
      href: "#",
    },
    {
      title: "Complimentary IV Sedation",
      body:
        "We proudly offer complimentary IV sedation for treatments over $2,500 to ensure your comfort during extensive procedures. Contact us today to learn more and schedule your consultation.",
      cta: "IV Sedation Dentistry",
      href: "#",
    },
    {
      title: "Restore Your Smile",
      body:
        "Dental implants offer a long-lasting solution for missing teeth, providing stability and a natural look that enhances your smile and oral health. With implants, you can enjoy improved chewing, speaking, and confidence, knowing your restoration is secure.",
      cta: "Explore Dental Implants",
      href: "#",
    },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 hex-bg opacity-30 -z-10" />

      <div className="container-xl grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="card">
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href={item.href} className="mt-6 btn-outline-gold">
                {item.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="relative py-14 md:py-16">
      <div className="absolute inset-0 -z-10 hex-bg opacity-20" />

      <div className="container-xl px-4 text-center">
        <h2 className="font-serif mb-6 text-[32px] font-bold text-[#87622c] sm:text-[38px] md:text-[44px]">
          Welcome to Burleydds Dentistry
        </h2>
        <p
          className="
            mx-auto
            text-[16px]
            leading-relaxed
            text-[#333]
            md:max-w-3xl
          "
        >
          Burleydds Dentistry, located in Blue Ash, Batavia, and Lebanon, OH, provides a relaxing environment where you can
          feel at home. Dr. Burleydds and his staff ensure their care puts you immediately at ease, is of optimal quality,
          and is provided at an affordable price. At Burleydds Dentistry, our advanced dental technology helps ensure you
          have a positive patient experience every time.
        </p>
      </div>
    </section>
  );
}