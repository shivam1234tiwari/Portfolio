import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        About <span className="text-cyan-400">Me</span>
      </h2>
      <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm space-y-4 text-slate-300 leading-relaxed">
        <p>
          I am an MCA candidate at DR D Y Patil Dyaan Prasad Global University, Pune, and a BCA graduate from Sri Balaji University[cite: 1]. My primary focus revolves around MERN stack development, API design optimization, and rigorous backend system structures[cite: 1].
        </p>
        <p>
          Throughout my academic and independent project work, I have built complete end-to-end systems featuring secure JWT authorization workflows, relational/non-relational database modeling (MongoDB, PostgreSQL, MySQL), and clean MVC design patterns[cite: 1].
        </p>
      </div>
    </section>
  );
}