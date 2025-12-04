"use client";

import { Navigation } from "@/components/navigation";

export default function MembershipPage() {
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

          {/* Google Forms Iframe */}
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfqb9YMJvKk5xndeUM6NpKmzShYeH6pg-jTo_Njry-WPV5MNA/viewform?embedded=true"
              width={500}
              height={1360}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="membership-iframe"
              style={{
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              title="WCO Membership Form">
              Loading…
            </iframe>
          </div>
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
