import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Rahul Tiwari. Built for FlyRank Internship Portfolio.
        </p>

        <div className="flex items-center gap-4">
          {/* FlyRank Graduate Badge */}
          <a
            href="https://internship.flyrank.ai/intern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all"
          >
            <span className="text-cyan-400">✦</span>
            FlyRank Graduate
          </a>
        </div>

      </div>
    </footer>
  );
}