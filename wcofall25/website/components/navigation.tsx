"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/membership", label: "MEMBERSHIP" },
    { href: "/socials", label: "SOCIALS" },
    { href: "/about", label: "ABOUT US" },
    { href: "/projects", label: "PROJECTS" },
    { href: "https://aztechacks.com", label: "AZTECHACKS", external: true },
  ];

  return (
    <nav className="border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 md:py-6">
        {/* Logo/Home Link */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          onClick={closeMenu}>
          <Image src="/images/wco.png" alt="WCO Logo" width={40} height={40} />
          <span className="font-bold text-lg hidden sm:inline">WCO</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer">
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}>
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-4 sm:px-6 py-4 space-y-4 border-t border-border/30 bg-background/95 backdrop-blur">
          {navLinks.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-sm font-medium tracking-wide hover:text-primary transition-colors duration-200 py-2"
                target="_blank"
                rel="noopener noreferrer">
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block text-sm font-medium tracking-wide transition-colors duration-200 py-2 ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
