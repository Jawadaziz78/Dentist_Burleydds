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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-xl flex h-24 items-center justify-between px-6">
        {/* Logo Section - UPDATED CLASSES HERE */}
        <Link href="/" className="flex items-center gap-2 select-none"> {/* Reduced gap from 3 to 2 */}
          <Image
            src="/logo-tooth.svg"
            alt="Burleydds Dentistry"
            width={40} // Smaller size on mobile
            height={44} // Smaller size on mobile
            priority
            className="shrink-0 sm:w-[52px] sm:h-[56px]" // Use sm: to keep the original large size on tablets/desktop
          />
          <div className="leading-tight">
            {/* The text is now smaller on mobile and increases on sm: */}
            <div className="font-sans font-extrabold text-[20px] sm:text-[34px] tracking-tight text-[#1a1a1a] uppercase"> 
              BURLEYDDS
            </div>
            {/* The second line is smaller on mobile, increases on sm:, and has a tighter negative margin for mobile */}
            <div className="font-sans font-extrabold text-[20px] sm:text-[34px] tracking-tight text-[#1a1a1a] uppercase -mt-1 sm:-mt-1">
              DENTISTRY
            </div>
          </div>
        </Link>

        {/* Desktop Nav - Unchanged */}
        <nav className="hidden lg:flex items-center gap-12">
          {navigation.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile Button - UPDATED STYLING AND ADDED 'MENU' TEXT */}
        {/* To match the Moorehead design, we remove the border and add the 'MENU' text */}
        <button
          type="button"
          className="ml-auto lg:hidden inline-flex items-center justify-center gap-1 text-[#937848] transition-colors duration-200" // Styled to match Moorehead look
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-[14px] font-semibold uppercase tracking-wider">MENU</span>
          {/* We now apply the color and stroke to the icon directly */}
          {open ? <CloseIcon className="h-5 w-5 stroke-2" /> : <MenuIcon className="h-5 w-5 stroke-2" />}
        </button>
      </div>

      {/* Mobile Menu - Unchanged */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-xl py-6 flex flex-col gap-4 px-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between text-[14px] font-semibold uppercase tracking-wider ${
                  item.isActive ? "text-[#937848]" : "text-black hover:text-[#937848]"
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon className="h-4 w-4 text-[#937848]" />}
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
      className={`inline-flex items-center gap-2 text-[15px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
        item.isActive ? "text-[#937848]" : "text-black hover:text-[#937848]"
      }`}
    >
      {item.label}
      {item.hasDropdown && <ChevronDownIcon className="h-[14px] w-[14px] text-[#937848]" />}
    </Link>
  );
}

/* Icons - Updated to accept className prop for color/stroke control */
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path strokeLinecap="round" d="M6 6l12 12M6 18 18 6" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}