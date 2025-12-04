"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Typewriter } from "@/components/ui/typewriter-text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isWCOHovered, setIsWCOHovered] = useState(false);
  const [isSDSUHovered, setIsSDSUHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-32 gap-8 md:gap-12">
        {/* Left Column - WCO Logo */}
        <div className="flex flex-col items-center md:items-start pt-2 sm:pt-0 w-full md:w-auto">
          {/* WCO Logo */}
          <div
            onMouseEnter={() => setIsWCOHovered(true)}
            onMouseLeave={() => setIsWCOHovered(false)}
            className="transition-transform duration-300">
            <Image
              src="/images/image.png"
              alt="World Computing Organization Logo"
              width={280}
              height={280}
              className="object-contain w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content Only */}
        <div className="flex-1 flex flex-col lg:ml-10 sm:ml-0 md:mr-3 w-full md:w-auto text-center md:text-left">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.2] mb-6 md:mb-8">
            WORLD
            <br />
            COMPUTING
            <br />
            ORGANIZATION
          </h1>

          {/* Subtitle */}
          <div className="mt-4 md:mt-6 space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/images/sdsu.png"
                alt="SDSU Logo"
                width={32}
                height={32}
                className="object-contain w-6 h-6 sm:w-8 sm:h-8"
              />
              <p className="text-base sm:text-lg md:text-xl font-black tracking-tighter leading-[1.2]">
                San Diego State University
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg font-black tracking-tighter leading-[1.2] text-center md:text-left">
              EST. 2024
            </p>
          </div>

          {/* Description */}

          <Typewriter
            text={[
              "Welcome to WCO @ SDSU",
              "Join a community of builders and innovators",
              "Learn what they don't end up teaching you in class",
            ]}
            speed={100}
            loop={true}
            className="mt-4 md:mt-1 text-sm sm:text-base"
          />

          {/* Call to Action */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/membership" className="w-full sm:w-auto">
              <InteractiveHoverButton text="JOIN US"></InteractiveHoverButton>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <InteractiveHoverButton text="ABOUT"></InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 md:px-8 py-8 mt-24 md:mt-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground tracking-widest">
            © 2025 WORLD COMPUTING ORGANIZATION SDSU. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
