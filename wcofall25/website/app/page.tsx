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
      <main className="max-w-7xl mx-auto flex items-start justify-between px-6 md:px-8 py-16 md:py-32 gap-12 sm:p-0">
        {/* Left Column - WCO Logo */}
        <div className="flex flex-col items-start pt-2 sm:pt-0">
          {/* WCO Logo */}
          <div
            onMouseEnter={() => setIsWCOHovered(true)}
            onMouseLeave={() => setIsWCOHovered(false)}
            className="transition-transform duration-300"
            style={{
              transform: isWCOHovered
                ? "scale(1.08) rotate(5deg)"
                : "scale(1) rotate(0deg)",
            }}
          >
            <Image
              src="/images/image.png"
              alt="World Computing Organization Logo"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content Only */}
        <div className="flex-1 flex flex-col lg:ml-10 sm:ml-0 mr-3">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.2] mb-8 sm:text-xl">
            WORLD
            <br />
            COMPUTING
            <br />
            ORGANIZATION
          </h1>

          {/* Subtitle */}
          <div className="mt-6 space-y-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/sdsu.png"
                alt="SDSU Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <p className="text-xl font-black tracking-tighter leading-[1.2] ">
                San Diego State University
              </p>
            </div>
            <p className="text-lg md:text-md font-black tracking-tighter leading-[1.2] ">
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
            className="mt-1"
          />

          {/* Call to Action */}
          <div className="mt-10 flex gap-4">
            <Link href="/membership">
              <InteractiveHoverButton text="JOIN US"></InteractiveHoverButton>
            </Link>
            <Link href="/about">
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
