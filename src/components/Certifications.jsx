import React from "react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    id: 1,
    name: "SQL Bootcamp",
    issuer: "Udemy",
    date: "2025",
    category: "Database",
  },
  {
    id: 2,
    name: "Git Training",
    issuer: "Simplilearn",
    date: "2025",
    category: "Tools",
  },
  {
    id: 3,
    name: "Introduction to MongoDB",
    issuer: "Simplilearn",
    date: "2025",
    category: "Database",
  },
  {
    id: 4,
    name: "Node.js & Express.js",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "Backend",
  },
  {
    id: 5,
    name: "Crash Course: Docker For Absolute Beginners",
    issuer: "KodeKloud",
    date: "Sep 2026",
    category: "DevOps",
  },
  {
    id: 6,
    name: "Crash Course: Kubernetes For Absolute Beginners",
    issuer: "KodeKloud",
    date: "Oct 2026",
    category: "DevOps",
  },
  {
    id: 7,
    name: "AWS Educate Cloud Computing 101",
    issuer: "AWS Training & Certification",
    date: "May 2026",
    category: "Cloud",
  },
  {
    id: 8,
    name: "Node.js (Basic) Certificate",
    issuer: "HackerRank",
    date: "Feb 2026",
    category: "Backend",
  },
  {
    id: 9,
    name: "SQL (Foundational) Certificate",
    issuer: "HackerRank",
    date: "Feb 2026",
    category: "Database",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
          Learning & Achievements
        </p>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Certifications &{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Competencies
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Courses and certificates covering backend development,
          databases, cloud computing, and DevOps fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert) => (
          <article
            key={cert.id}
            className="group flex min-h-48 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Award className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                </div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-400">
                  {cert.category}
                </span>
              </div>

              <h3 className="mb-2 font-semibold leading-relaxed text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                {cert.name}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                {cert.issuer}
              </p>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-3 dark:border-slate-800">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Completed: {cert.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
