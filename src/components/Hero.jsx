import React from 'react';
import { ArrowRight, FileText, Calendar } from 'lucide-react';
import profileImg from '../assets/profile.jpg'; // Yahan assets se image import ki gayi hai

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 transition-colors">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20 text-xs font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          Backend-Focused MERN Stack Developer
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
          Hi, I'm <span className="text-cyan-500">Rahul Tiwari</span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
          An MCA candidate and passionate developer building robust backend systems, scalable REST APIs, and dynamic, responsive web applications with clean architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>

        {/* Social / External Links */}
        <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-slate-500 dark:text-slate-400">
          {/* GitHub SVG */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn SVG */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ03..."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Calendar className="w-4 h-4 text-cyan-500" /> Book a Call
          </a>
        </div>
      </div>

      {/* Right Visual / Profile Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 dark:border-cyan-500/20 p-2 shadow-2xl flex items-center justify-center">
          <img
            src={profileImg}
            alt="Rahul Tiwari"
            className="w-full h-full object-cover rounded-2xl border border-slate-200 dark:border-slate-800"
          />
        </div>
      </div>
    </section>
  );
}