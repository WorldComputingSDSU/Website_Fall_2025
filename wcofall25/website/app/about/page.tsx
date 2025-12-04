"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { useState, useEffect } from "react";

const slideshowImages = [
  "/assets/derek.png",
  "/assets/firstmeeting.png",
  "/assets/wcomeeting.png",
  "/assets/wconetflix.png",
  "/assets/wcowebsitemeeting.png",
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 md:mb-12">
          ABOUT US
        </h1>

        {/* Slideshow */}
        <div className="mb-8 md:mb-12 w-full overflow-hidden rounded-lg">
          <div className="relative aspect-video w-full">
            {slideshowImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}>
                <Image
                  src={image}
                  alt={`WCO Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              The World Computing Organization at San Diego State University is
              dedicated to fostering a vibrant community of computing
              enthusiasts. We aim to empower students through hands-on projects,
              industry connections, and collaborative learning experiences that
              bridge the gap between academic knowledge and real-world
              application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Who We Are</h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4">
              Founded in 2024, WCO brings together students from diverse
              computing backgrounds—including computer science, computer
              engineering, and related fields. Our organization provides a
              platform for students to:
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-foreground/80">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Collaborate on innovative computing projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Network with industry professionals and alumni</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Develop technical and leadership skills</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Participate in workshops and technical talks</span>
              </li>
            </ul>
          </section>

          <section className="relative overflow-hidden px-2 py-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "We push boundaries and embrace creative problem-solving.",
                },
                {
                  title: "Collaboration",
                  desc: "We believe in the power of teamwork and diverse perspectives.",
                },
                {
                  title: "Excellence",
                  desc: "We strive for high quality in everything we do.",
                },
                {
                  title: "Inclusivity",
                  desc: "We welcome students of all skill levels and backgrounds.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-6 border border-border/20 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 md:px-8 py-8 mt-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground tracking-widest">
            © 2025 WORLD COMPUTING ORGANIZATION SDSU. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
