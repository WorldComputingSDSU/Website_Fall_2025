"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { useState } from "react";

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    year: "",
    major: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            JOIN WCO
          </h1>
          <p className="text-lg md:text-xl text-foreground/70">
            Become part of a thriving community of computing enthusiasts at
            SDSU. Fill out the form below to express your interest in joining.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
            <ul className="space-y-4">
              {[
                "Hands-on development projects",
                "Networking with industry professionals",
                "Guest speakers from tech companies",
                "Resume review and career guidance",
                "Weekly meetings and workshops",
                "Community of like-minded peers",
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your last name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@sdsu.edu"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Academic Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select year</option>
                <option value="freshman">Freshman</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              SUBMIT APPLICATION
            </button>
          </form>
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
