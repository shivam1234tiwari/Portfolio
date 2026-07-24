import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { name: 'AWS Educate Cloud Computing 101', issuer: 'AWS Training & Certification', date: 'May 2026' },
    { name: 'Node.js (Basic) Certificate', issuer: 'HackerRank', date: 'Feb 2026' },
    { name: 'SQL (Foundational) Certificate', issuer: 'HackerRank', date: 'Feb 2026' },
  ];

  return (
    <section id="certifications" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Certifications & <span className="text-cyan-400">Competencies</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-cyan-400 shrink-0" />
              <h3 className="font-semibold text-slate-200 text-sm">{cert.name}</h3>
            </div>
            <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex justify-between">
              <span>{cert.issuer}</span>
              <span className="text-cyan-400">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}