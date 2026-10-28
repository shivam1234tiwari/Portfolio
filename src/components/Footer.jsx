import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Rahul Tiwari. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/shivam1234tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rahul-tiwari-421254255"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://internship.flyrank.ai/intern"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            FlyRank
          </a>
        </div>
      </div>
    </footer>
  );
}