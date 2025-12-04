"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-6">
        {/* Logo/Home Link */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/images/wco.png" alt="WCO Logo" width={40} height={40} />
          <span className="font-bold text-lg hidden sm:inline">WCO</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <Link
            href="/membership"
            className={`transition-colors duration-200 ${
              isActive("/membership")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}>
            MEMBERSHIP
          </Link>
          <Link
            href="/socials"
            className={`transition-colors duration-200 ${
              isActive("/socials")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}>
            SOCIALS
          </Link>
          <Link
            href="/exec"
            className={`transition-colors duration-200 ${
              isActive("/exec")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}>
            EXEC BOARD
          </Link>
          <Link
            href="/about"
            className={`transition-colors duration-200 ${
              isActive("/about")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}>
            ABOUT US
          </Link>
          <Link
            href="/projects"
            className={`transition-colors duration-200 ${
              isActive("/projects")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}>
            PROJECTS
          </Link>
          <Link
            href="https://aztechacks.com"
            className="hover:text-primary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer">
            AZTECHACKS
          </Link>
        </div>
      </div>
    </nav>
  );
}
