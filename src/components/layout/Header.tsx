"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about-us" },
  { label: "Innovation", href: "/innovation" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investor Relations", href: "/investor-relations" },
  { label: "Join Us", href: "/careers" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // The wrapper creates the floating effect
    <header className="absolute top-6 left-0 w-full z-50 px-4 lg:px-10">
      
      {/* The actual navbar box */}
      <div className="w-full max-w-[1600px] mx-auto bg-white shadow-lg rounded h-20 flex items-center justify-between px-6 lg:px-8 font-sans overflow-hidden">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
  <Image
    src="/assests/logo.png"
    alt="CubeHighways"
    width={180}
    height={80}
    className="h-auto w-[140px] lg:w-[180px]"
    priority
  />
</Link>

        {/* Desktop Navigation (Increased font size to 15px) */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[18px] font-medium text-gray-800 hover:text-cube-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden lg:inline-flex items-center justify-center bg-cube-dark text-white px-6 py-2.5 text-[15px] font-medium rounded-sm hover:bg-black transition-colors"
          >
            Contact Us
          </Link>
          
          <button 
            className="xl:hidden p-2 text-cube-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}