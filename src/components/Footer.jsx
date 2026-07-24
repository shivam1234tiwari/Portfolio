import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Rahul Tiwari. Built for FlyRank Internship Portfolio.</p>
    </footer>
  );
}