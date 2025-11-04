"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-[1.3fr_1fr_1fr_1fr] xl:gap-x-20">
          {/* Brand */}
          <div className="flex items-start gap-3">
            <Image
              src="/logo-tooth.svg"
              alt="Burleydds Dentistry logo"
              width={38}
              height={48}
              priority
            />
            <div className="leading-tight">
              <span className="block font-serif text-[24px] tracking-tight text-[color:var(--text-dark)]">BURLEYDDS</span>
              <span className="block font-serif text-[24px] tracking-tight text-[color:var(--text-dark)]">DENTISTRY</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="footer-link">Wisdom Teeth Removal</Link></li>
              <li><Link href="#" className="footer-link">All-on-4 Dental Implants</Link></li>
              <li><Link href="#" className="footer-link">IV Sedation Dentistry</Link></li>
              <li><Link href="#" className="footer-link">Invisalign®</Link></li>
              <li><Link href="#" className="footer-link">Dental Veneers</Link></li>
              <li><Link href="#" className="footer-link">All Services</Link></li>
            </ul>
          </div>

          {/* Quick Links + Patient Resources */}
          <div className="space-y-6">
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="footer-link">About</Link></li>
                <li><Link href="#" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Patient Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="footer-link">New Patient Resources</Link></li>
                <li><Link href="#" className="footer-link">Current Patient Resources</Link></li>
                <li><Link href="#" className="footer-link">Make An Appointment</Link></li>
              </ul>
            </div>
          </div>

          {/* Other Questions + Connect */}
          <div className="space-y-6">
            <div>
              <h4 className="footer-heading">Other Questions?</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="footer-link">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Connect</h4>
              <div className="flex items-center gap-5">
                <Link aria-label="Facebook" href="#" className="footer-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 0 1 1-1h3V2z" /></svg>
                </Link>
                <Link aria-label="Yelp" href="#" className="footer-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3.5 11 9 5.5 7.5M16 9l3.5-1-1 3.5M7 14l-3.5 1L7 18m5 3.5L11 17l5.5 1.5" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b99c6b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col gap-3 items-center justify-between text-xs text-white/90 md:flex-row">
          <p>© 2025 <span className="font-semibold">Burleydds Dentistry</span>. All Rights Reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="#" className="footer-bottom-link">Privacy Policy</Link>
            <span className="text-white/60">•</span>
            <Link href="#" className="footer-bottom-link">Accessibility Statement</Link>
            <span className="text-white/60">•</span>
            <Link href="#" className="footer-bottom-link">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
