"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/rti-welcome", label: "RTI Welcome" },
  { href: "/rti-cell", label: "RTI Cell" },
  { href: "/rti-procedure", label: "Procedure For RTI" },
  { href: "/rti", label: "Disclosure Under Section 4" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 border-b-2 border-gray-100">
      <div className="container mx-auto px-4">
        {/* Increased header height to accommodate new text layout */}
        <div className="flex items-center justify-between h-32">
          {/* Logo and Title Section */}
          <Link href="/" className="flex items-center">
            {/* Use the correct logo file and size */}
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/iiti_logo.png`}
              alt="IIT Indore Logo"
              width={100}
              height={100}
            />

            {/* Vertical container for the text */}
            <div className="ml-4 hidden sm:flex flex-col">
              <span className="text-xl font-semibold text-iit-blue">
                भारतीय प्रौद्योगिकी संस्थान इंदौर Indian Institute of Technology
                Indore
              </span>

              <span className="mt-1 text-xl font-bold text-iit-maroon">
                Right to Information
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-iit-blue bg-iit-blue/10"
                      : "text-iit-gray-dark hover:text-iit-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-iit-gray-dark"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-iit-blue bg-iit-blue/10"
                      : "text-iit-gray-dark hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
