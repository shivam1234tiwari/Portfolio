
import React from "react";
import { ExternalLink } from "lucide-react";

const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={`${className} fill-current`}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2 .7 2 1.8 1.3 3.4.9 4.2.7.2-.7.5-1.2.9-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18.8 6.7 19.8 7 19.8 7c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v2.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const projects = [
  {
    title: "EventHub",
    description:
      "A modern event booking platform for exploring events and managing event-related activities.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/EventHub-Project",
    demo: "https://eventhub-nine-ruddy.vercel.app/",
  },
  {
    title: "Rent-A-Ride",
    description:
      "A vehicle rental management application featuring user authentication and vehicle booking functionality.",
    tech: ["React", "Express.js", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/Rent-a-Ride",
    demo: "https://rent-a-ride1.vercel.app/",
  },
  {
    title: "Authentication & Security System",
    description:
      "An authentication system featuring user registration, login, JWT authentication, and protected routes.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/shivam1234tiwari/Auth-Project",
    demo: "https://auth-project-inwh.onrender.com/",
  },
  {
    title: "MERN E-commerce",
    description:
      "A full-stack e-commerce application focused on product management and administrative functionality.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/E-Commerce",
    demo: "",
  },
  {
    title: "TitanFit Gym",
    description:
      "A gym and fitness platform built to organize fitness-related information and services.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/titanfit-gym",
    demo: "https://titanfit-gym.vercel.app/",
  },
  {
    title: "PulseMonitor",
    description:
      "An API monitoring and incident management platform featuring automated health checks, response-time tracking, monitoring history, and active/inactive monitoring controls.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    // Replace this URL if your GitHub repository has a different name.
    github: "https://github.com/shivam1234tiwari/api-monitoring-platform",
    demo: "https://api-monitoring-management.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
          What I've built
        </p>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Featured{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Projects
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
          Explore my projects, technologies, and practical work in
          full-stack and backend development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const hasDemo = Boolean(project.demo?.trim());

          return (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none"
            >
              <div>
                {/* Project Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <GitHubIcon className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>

                {hasDemo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-3 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-400 dark:border-slate-800 dark:bg-slate-800/50">
                    <ExternalLink className="h-4 w-4" />
                    Demo N/A
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* GitHub Profile */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/shivam1234tiwari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-slate-800 transition-all hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-200 dark:hover:text-cyan-400"
        >
          <GitHubIcon className="h-5 w-5" />
          Explore More on GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
