import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'EventHub',
      description: 'Modern event booking platform built using React and Node.js.',
      tech: ['React', 'Node', 'Express', 'MongoDB'],
      github: 'https://github.com/shivam1234tiwari/EventHub-Project',
      demo: 'https://eventhub-nine-ruddy.vercel.app/',
    },
    {
      title: 'Rent-A-Ride — Vehicle Rental Management',
      description: 'Vehicle rental management system with authentication and booking.',
      tech: ['React', 'Express', 'MongoDB'],
      github: 'https://github.com/shivam1234tiwari/Rent-a-Ride',
      demo: 'https://rent-a-ride1.vercel.app',
    },
    {
      title: 'Advanced Authentication & Security System',
      description: 'JWT Authentication with Login, Register and Authorization.',
      tech: ['Node', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/shivam1234tiwari/Auth-Project',
      demo: '',
    },
    {
      title: 'MERN Ecommerce Application',
      description: 'Full Stack Ecommerce Application with Admin Dashboard.',
      tech: ['React', 'Node', 'MongoDB'],
      github: 'https://github.com/shivam1234tiwari/E-Commerce.git',
      demo: '',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto transition-colors">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
        Featured <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const hasDemo = project.demo && project.demo.trim() !== '' && project.demo !== '#';

          return (
            <div 
              key={idx} 
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm dark:shadow-none transition-all"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                {/* GitHub Link */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                {/* Live Demo Link */}
                {hasDemo ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                ) : (
                  <button 
                    disabled 
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 text-xs font-semibold flex items-center justify-center gap-2 cursor-not-allowed border border-slate-200 dark:border-slate-800 opacity-60"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo N/A
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}