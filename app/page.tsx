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

// --- HERO (full-bleed image, centered, no gap below navbar)
function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="container-xl flex min-h-[62vh] flex-col items-center justify-center py-16 text-center sm:min-h-[68vh] lg:min-h-[72vh]">
        <h1 className="font-serif text-[42px] leading-[1.15] text-white sm:text-[56px] md:text-[64px] lg:text-[72px]">
          Feel At Home With a Relaxing Dental
          <br className="hidden sm:block" />
          <span> Experience.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base text-white/90 sm:text-lg">
          Proudly Serving Cincinnati, Batavia, and Lebanon
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#doctors" className="btn btn-outline-light rounded-full px-6 py-3 text-sm font-semibold">
            Meet Our Doctors
          </a>
          <a href="#appointment" className="btn btn-gold rounded-full px-6 py-3 text-sm font-semibold">
            Make An Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES (three cards with hex watermark) ---------- */
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
    <section aria-labelledby="features-heading" className="relative py-16 md:py-20">
      {/* Pale hex watermark behind */}
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

/* ---------- WELCOME (gold heading centered) ---------- */
function WelcomeSection() {
  return (
    <section aria-labelledby="welcome-heading" className="relative py-14 md:py-16">
      {/* Faint repeating hex behind like reference */}
      <div className="absolute inset-0 hex-bg opacity-20 -z-10" />

      <div className="container-xl welcome-wrap">
        <h2 id="welcome-heading" className="welcome-title">
          Welcome to Burleydds Dentistry
        </h2>

        <p className="welcome-text">
          Burleydds Dentistry, located in Blue Ash, Batavia, and Lebanon, OH, provides a relaxing environment where you can
          feel at home. Dr. Burleydds and his staff ensure their care puts you immediately at ease, is of optimal quality,
          and is provided at an affordable price. At Burleydds Dentistry, our advanced dental technology helps ensure you
          have a positive patient experience every time.
        </p>
      </div>
    </section>
  );
}
