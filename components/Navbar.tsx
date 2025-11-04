"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
};

const navigation: NavigationItem[] = [
  { label: "HOME", href: "#", isActive: true },
  { label: "ABOUT", href: "#welcome", hasDropdown: true },
  { label: "SERVICES", href: "#services", hasDropdown: true },
  { label: "FINANCIAL", href: "#insurance", hasDropdown: true },
  { label: "BLOG", href: "#gallery" },
  { label: "CONTACT", href: "#footer", hasDropdown: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="container-xl flex h-24 items-center">
        {/* Brand: tooth + two-line uppercase wordmark (bigger) */}
        <Link href="/" className="flex items-center gap-3 text-[color:var(--text-dark)]" aria-label="Burleydds Dentistry">
          <Image
            src="/logo-tooth.svg"
            alt="Burleydds Dentistry"
            width={48}
            height={54}
            priority
            className="shrink-0"
          />
          <div className="leading-[0.98] -mt-0.5 select-none">
            <div className="font-sans font-black uppercase tracking-tight text-[36px] md:text-[40px]">
              MOOREHEAD
            </div>
            <div className="font-sans font-black uppercase tracking-tight text-[36px] md:text-[40px] -mt-1">
              DENTISTRY
            </div>
          </div>
        </Link>

        {/* Desktop nav: add more space before HOME */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14 ml-16 md:ml-24 lg:ml-32 xl:ml-40">
          {navigation.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="ml-auto lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-subtle)] text-[color:var(--text-dark)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[color:var(--border-subtle)] bg-[color:var(--off-white)]">
          <div className="container-xl py-6 flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between text-[12px] font-extrabold uppercase tracking-[0.20em] ${
                  item.isActive ? "text-[color:var(--brand-gold)]" : "text-[color:var(--text-dark)]"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown ? <ChevronDownIcon className="h-4 w-4 text-[color:var(--brand-gold)]" /> : null}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      href={item.href}
      className={`inline-flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-[0.20em] transition ${
        item.isActive
          ? "text-[color:var(--brand-gold)]"
          : "text-[color:var(--text-dark)] hover:text-[color:var(--brand-gold)]"
      }`}
    >
      {item.label}
      {item.hasDropdown ? (
        <ChevronDownIcon className="h-[14px] w-[14px] text-[color:var(--brand-gold)]" />
      ) : null}
    </Link>
  );
}

/* Icons */
function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M6 18 18 6" />
    </svg>
  );
}
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}
