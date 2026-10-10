import React from 'react';
import { ArrowRight, FileText, Code2 } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const GitHubIcon = () => ( <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"> <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2 .7 2 1.8 1.3 3.4.9 4.2.7.2-.7.5-1.2.9-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18.8 6.7 19.8 7 19.8 7c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v2.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /> </svg>
);

const LinkedInIcon = () => ( <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" /> </svg>
);

export default function Hero() {
return ( <section
   id="home"
   className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 scroll-mt-20"
 >
{/* Left Content */} <div className="flex-1 space-y-6 text-center md:text-left"> <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-semibold tracking-wide uppercase"> <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
Backend-Focused Full Stack Developer </div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
      Hi, I'm{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        Rahul Tiwari
      </span>
    </h1>

    <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">
      MERN Stack Developer <span className="text-cyan-500">|</span>{' '}
      Backend <span className="text-cyan-500">|</span> DevOps
    </h2>

    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
      I'm an MCA student passionate about building secure backend
      systems, REST APIs, and scalable web applications. I enjoy
      solving practical problems and exploring cloud infrastructure
      and deployment workflows.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
      <a
        href="#projects"
        className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
      >
        View Projects
        <ArrowRight className="w-4 h-4" />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
      >
        <FileText className="w-4 h-4" />
        View Resume
      </a>
    </div>

    {/* Social Links */}
    <div className="pt-3 flex items-center justify-center md:justify-start gap-4 text-slate-500 dark:text-slate-400">
      <a
        href="https://github.com/shivam1234tiwari"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Rahul's GitHub profile"
        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
      >
        <GitHubIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/rahul-tiwari-421254255"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Rahul's LinkedIn profile"
        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
      >
        <LinkedInIcon />
      </a>

      <a
        href="#contact"
        aria-label="Go to contact section"
        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
      >
        <Code2 className="w-5 h-5" />
      </a>
    </div>
  </div>

  {/* Profile Image */}
  <div className="flex-1 flex justify-center">
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 dark:border-cyan-500/20 p-2 shadow-2xl shadow-cyan-500/10">
      <div className="absolute -inset-3 rounded-3xl border border-cyan-500/10 -z-10" />

      <img
        src={profileImg}
        alt="Rahul Tiwari - Full Stack Developer"
        className="w-full h-full object-cover rounded-2xl border border-slate-200 dark:border-slate-800"
        fetchPriority="high"
      />
    </div>
  </div>
</section>

);
}
