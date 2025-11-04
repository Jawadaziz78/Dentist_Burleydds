"use client";
// The 'use client' directive is required for components that use hooks like useState and useEffect

import { useState, useEffect } from 'react'; 
// NOTE: I'm assuming you have the correct file paths for these components
import GalleryStrip from "@/components/GalleryStrip";
import InsuranceBar from "../components/InsuranceBar";

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

// ---------------- HERO SECTION (RESPONSIVE FONTS) ----------------
function HeroSection() {
  // Define the list of images to cycle through using 'as const' for type safety
  const images = [
    '/hero-slide-1.jpg', // Wide image 1: Clinical equipment view
    '/hero-slide-2.jpg', // Wide image 2: Waiting room view
    // Add more images here if needed!
  ] as const;

  // State to keep track of which image is currently visible
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to handle the image transition timer
  useEffect(() => {
    // Set a timer to change the image every 3000ms (3 seconds)
    const timer = setTimeout(() => {
      // Cycle to the next index, wrapping around to 0 if it hits the end
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    // Cleanup: Clear the timer when the component unmounts or the index changes
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]); // Dependencies: Rerun effect when index changes

  // Determine the next image path for pre-loading (to ensure a smooth transition)
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <section id="home" className="relative isolate overflow-hidden font-serif">
      {/* Background image 1: Currently visible image (fades out) */}
      <img
        src={images[currentImageIndex]}
        alt="Dental background image"
        className="
          absolute inset-0 -z-10 h-full w-full object-cover object-top 
          transition-opacity duration-1000 ease-in-out opacity-100
        "
        key={currentImageIndex} 
      />

      {/* Background image 2: Pre-loads the next image (stays hidden) */}
      <img
        src={images[nextImageIndex]}
        alt="Dental background image (Preloading)"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-top" 
        key={nextImageIndex} 
        loading="lazy"
      />

      {/* Overlay - Stays on top of both images */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      {/* Content (Text and Buttons) - Must have a higher z-index than the images */}
      <div className="container-xl flex min-h-[70vh] flex-col items-center justify-center py-16 text-center z-10 relative px-4"> {/* Added px-4 for safety */}
        {/* Heading -- REDUCED BASE FONT SIZE */}
        <h1 className="font-serif font-bold text-white leading-[1.2] text-[36px] sm:text-[54px] md:text-[64px] lg:text-[70px]">
          Feel At Home With a Relaxing Dental
          <br />
          Experience.
        </h1>

        {/* Subheading -- REDUCED BASE FONT SIZE */}
       <p className="mt-6 text-white text-[20px] sm:text-[30px] md:text-[34px] font-bold drop-shadow-md">
          Proudly Serving Cincinnati, Batavia, and Lebanon
        </p>

        {/* Buttons -- REDUCED BASE FONT SIZE */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#doctors"
            className="px-8 py-3 border border-white bg-white text-black text-[18px] sm:text-[24px] font-bold transition-all duration-300 hover:bg-transparent hover:text-white"
            //className="px-8 py-3 border border-white text-white text-[18px] sm:text-[24px] font-bold transition-all duration-300 hover:bg-white hover:text-black"
          >
            Meet Our Doctors
          </a>
          <a
            href="#appointment"
            //className="px-8 py-3 border border-white text-white text-[18px] sm:text-[24px] font-bold transition-all duration-300 hover:bg-white hover:text-black"
            className="px-8 py-3 border border-white bg-white text-black text-[18px] sm:text-[24px] font-bold transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Make An Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------- WELCOME SECTION (NO CHANGES NEEDED) ----------------
// ---------------- WELCOME SECTION (TRUE RESPONSIVE WIDTH FIX) ----------------
function WelcomeSection() {
  return (
    <section className="relative py-14 md:py-16">
      <div className="absolute inset-0 hex-bg opacity-20 -z-10" />

      {/* We are keeping the px-4 here for safety padding */}
      <div className="container-xl text-center px-4"> 
        <h2 className="font-serif text-[#87622c] text-[32px] sm:text-[38px] md:text-[44px] font-bold mb-6">
          Welcome to Burleydds Dentistry
        </h2>

        {/* FIXED: Changed 'max-w-3xl' to 'md:max-w-3xl'.
          Now it's full-width on mobile and constrained on desktop.
        */}
        <p className="
          mx-auto 
          text-[#333] 
          text-[16px] 
          leading-relaxed
          md:max-w-3xl 
        ">
          Burleydds Dentistry, located in Blue Ash, Batavia, and Lebanon, OH, provides a relaxing environment where you can
          feel at home. Dr. Burleydds and his staff ensure their care puts you immediately at ease, is of optimal quality,
          and is provided at an affordable price. At Burleydds Dentistry, our advanced dental technology helps ensure you
          have a positive patient experience every time.
        </p>
      </div>
    </section>
  );
}

// ---------------- FEATURES SECTION (NO CHANGES NEEDED) ----------------
function FeaturesSection() {
  const items = [
    {
      title: "Need Urgent Dental Care?",
      body:
        "We offer quick assessments and fast referrals. We’ll prioritize getting you an exam and guiding you to the right treatment—whether in our office or with one of our trusted specialists.",
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

      <div className="container-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((it) => (
          <article key={it.title} className="card">
            <div className="card-body">
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              <a href={it.href} className="mt-6 btn-outline-gold">{it.cta}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}