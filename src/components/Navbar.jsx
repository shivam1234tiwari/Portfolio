import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-cyan-400">
          <Code2 className="w-6 h-6" />
          <span>Rahul Tiwari</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="https://calendar.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all"
          >
            Book a Call
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}