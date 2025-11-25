"use client";

import { Navigation } from "@/components/navigation";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "hireme",
    date: "2025",
    description:
      "Interview prep platform: everything you need to ace your next interview.",
    technologies: ["React", "Node.js", "WebSocket", "AI/ML"],
  },
  {
    id: 2,
    title: "AI Interviewer Bot",
    date: "2025",
    description:
      "An AI-powered interviewer that simulates real job interview scenarios using NLP, helping users prepare effectively.",
    technologies: [
      "Next.js",
      "Supabase",
      "OpenAI TTS",
      "OpenAI GPT-4",
      "OpenAI Embeddings",
      "OpenAI Whisper",
      "pdf2json",
    ],
  },
  {
    id: 3,
    title: "SDSU Basketball Scouting Report",
    date: "2025",
    description:
      "A data-driven scouting tool that compiles player and team statistics to support SDSU Men's Basketball in preparing scouting reports.",
    technologies: ["Python", "FastAPI", "Pandas", "Beautiful Soup"],
  },
  {
    id: 4,
    title: "Poker Bot",
    date: "2025",
    description:
      "A poker analysis bot that uses machine learning algorithms to evaluate hands and provide real-time strategic feedback.",
    technologies: [
      "Python",
      "Machine Learning",
      "CSV",
      "CLI-Based",
      "Pytest",
      "pandas",
      "scikit-learn",
      "numpy",
      "matplotlib",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            OUR PROJECTS
          </h1>
          <p className="text-lg md:text-xl text-foreground/70">
            Explore the innovative projects our members have built.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-foreground/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 bg-background hover:bg-foreground/5"
            >
              <div className="flex items-start justify-between gap-6 mb-3">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-foreground/60 whitespace-nowrap">
                  {project.date}
                </span>
              </div>

              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <Link
                href="#"
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                View Project <span>↗</span>
              </Link>
            </div>
          ))}
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
