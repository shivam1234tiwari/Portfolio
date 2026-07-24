import React from "react";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
          <span>General AI Fluency Track • FlyRank Intern</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-cyan-400">Rahul Tiwari</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium">
          Backend-focused MERN Stack Developer & MCA Candidate
        </p>
        <p className="text-slate-400 max-w-xl leading-relaxed">
          Specializing in scalable RESTful APIs, JWT authentication workflows, and robust MongoDB data models. Passionate about system design, secure backend architectures, and clean engineering practices.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold flex items-center gap-2 hover:bg-cyan-400 transition-all"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400" /> Resume
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-slate-400">
          {/* LinkedIn SVG Fallback */}
          <a href="https://linkedin.com/in/rahul-tiwari-421254255" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          {/* GitHub SVG Fallback */}
          <a href="https://github.com/shivam1234tiwari" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="GitHub">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm font-medium">
            <Calendar className="w-5 h-5 text-cyan-400" /> Book a Meeting
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
          <img src={profilePic} alt="Rahul Tiwari" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}