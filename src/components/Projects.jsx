import React from 'react';
import { ExternalLink } from 'lucide-react';

const GitHubIcon = ({ className = 'w-5 h-5' }) => (
<svg
className={`${className} fill-current`}
viewBox="0 0 24 24"
aria-hidden="true"

>

```
<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2 .7 2 1.8 1.3 3.4.9 4.2.7.2-.7.5-1.2.9-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18.8 6.7 19.8 7 19.8 7c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v2.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
```

  </svg>
);

const projects = [
{
title: 'EventHub',
description:
'A modern event booking platform for exploring events and managing event-related activities.',
tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
github: 'https://github.com/shivam1234tiwari/EventHub-Project',
demo: 'https://eventhub-nine-ruddy.vercel.app/',
},
{
title: 'Rent-A-Ride',
description:
'A vehicle rental management application featuring user authentication and vehicle booking functionality.',
tech: ['React', 'Express.js', 'MongoDB'],
github: 'https://github.com/shivam1234tiwari/Rent-a-Ride',
demo: 'https://rent-a-ride1.vercel.app/',
},
{
title: 'Authentication & Security System',
description:
'An authentication system featuring user registration, login, JWT authentication, and protected routes.',
tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
github: 'https://github.com/shivam1234tiwari/Auth-Project',
demo: 'https://auth-project-inwh.onrender.com',
},
{
title: 'MERN E-commerce',
description:
'A full-stack e-commerce application focused on product management and administrative functionality.',
tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
github: 'https://github.com/shivam1234tiwari/E-Commerce',
demo: '',
},
{
title: 'TitanFit Gym',
description:
'A full-stack gym and fitness management platform built to organize fitness-related information and services.',
tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
github: 'https://github.com/shivam1234tiwari/titanfit-gym',
demo: 'https://titanfit-gym.vercel.app/',
},
];

export default function Projects() {
return ( <section
   id="projects"
   className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20"
 >
{/* Section Heading */} <div className="text-center mb-12"> <p className="text-cyan-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
What I've built </p>

    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
      Featured{' '}
      <span className="text-cyan-500 dark:text-cyan-400">
        Projects
      </span>
    </h2>

    <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
      Explore my projects, technologies, and practical work in
      full-stack and backend development.
    </p>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {projects.map((project) => {
      const hasDemo =
        typeof project.demo === 'string' &&
        project.demo.trim() !== '';

      return (
        <article
          key={project.title}
          className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5"
        >
          <div>
            {/* Project Icon */}
            <div className="w-12 h-12 mb-5 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
              <GitHubIcon className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>

            {hasDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <span className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 text-sm font-semibold flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800">
                <ExternalLink className="w-4 h-4" />
                Demo N/A
              </span>
            )}
          </div>
        </article>
      );
    })}
  </div>

  {/* GitHub Profile */}
  <div className="text-center mt-12">
    <a
      href="https://github.com/shivam1234tiwari"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
    >
      <GitHubIcon className="w-5 h-5" />
      Explore More on GitHub
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
</section>

);
}
