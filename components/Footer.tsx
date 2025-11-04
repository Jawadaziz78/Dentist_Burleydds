"use client";

import Link from "next/link";

const col = "space-y-3";
const item = "footer-link text-sm";

export default function Footer() {
  return (
    <footer className="footer border-t border-white/10">
      <div className="container-xl py-16 grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Column 1 */}
        <div className={col}>
          <h3 className="footer-title text-lg">Services</h3>
          <div className="flex flex-col gap-2">
            <Link className={item} href="#">General Dentistry</Link>
            <Link className={item} href="#">Cosmetic Dentistry</Link>
            <Link className={item} href="#">Dental Implants</Link>
            <Link className={item} href="#">IV Sedation</Link>
            <Link className={item} href="#">Dental Veneers</Link>
            <Link className={item} href="#">All Services</Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className={col}>
          <h3 className="footer-title text-lg">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link className={item} href="#welcome">About</Link>
            <Link className={item} href="#gallery">Smile Gallery</Link>
            <Link className={item} href="#reviews">Patient Reviews</Link>
            <Link className={item} href="#appointment">Make An Appointment</Link>
          </div>
        </div>

        {/* Column 3 */}
        <div className={col}>
          <h3 className="footer-title text-lg">Patient Resources</h3>
          <div className="flex flex-col gap-2">
            <Link className={item} href="#forms">Patient Forms</Link>
            <Link className={item} href="#insurance">Insurance &amp; Financing</Link>
            <Link className={item} href="#faqs">FAQs</Link>
            <Link className={item} href="#portal">Patient Portal</Link>
          </div>
        </div>

        {/* Column 4 */}
        <div className={col}>
          <h3 className="footer-title text-lg">Other Questions?</h3>
          <div className="flex flex-col gap-2">
            <Link className={item} href="#contact">Contact Us</Link>
            <span className="text-sm opacity-90">Blue Ash • Batavia • Lebanon</span>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="footer-legal">
        <div className="container-xl py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span>© 2025 <strong>Burleydds Dentistry</strong>. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link className="footer-link" href="#privacy">Privacy Policy</Link>
            <Link className="footer-link" href="#accessibility">Accessibility Statement</Link>
            <Link className="footer-link" href="#tos">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
