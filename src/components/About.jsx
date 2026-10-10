import React from 'react';

const focusAreas = [
'MERN Stack',
'Backend Development',
'REST APIs',
'Database Design',
'DevOps & Cloud',
];

export default function About() {
return ( <section
   id="about"
   className="py-20 px-6 max-w-5xl mx-auto scroll-mt-20"
 >
{/* Section Heading */} <div className="text-center mb-10"> <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
Get to know me </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white">
      About <span className="text-cyan-400">Me</span>
    </h2>
  </div>

  {/* About Content */}
  <div className="p-6 md:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-5 text-slate-300 leading-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5">
    <p>
      Hi, I'm{' '}
      <span className="text-white font-semibold">
        Rahul Tiwari
      </span>
      , an MCA student and aspiring Software Developer passionate about
      building scalable web applications and reliable backend systems.
    </p>

    <p>
      My primary focus is{' '}
      <span className="text-cyan-400 font-medium">
        MERN Stack and Backend Development
      </span>
      . I work with Node.js, Express.js, React.js, MongoDB, SQL databases,
      and REST APIs to build secure, efficient, and maintainable
      applications. I enjoy implementing authentication, designing
      database schemas, and structuring applications using clean
      architectural practices.
    </p>

    <p>
      Alongside development, I'm expanding my knowledge of{' '}
      <span className="text-cyan-400 font-medium">
        DevOps and Cloud Technologies
      </span>
      , including Docker, AWS, and CI/CD workflows, to understand how
      applications are deployed, maintained, and scaled in real-world
      environments.
    </p>

    <p>
      I believe in learning by building, solving practical problems,
      and continuously improving my technical skills. My goal is to
      contribute to meaningful projects, collaborate with development
      teams, and grow as a backend-focused Full Stack Developer.
    </p>

    {/* Areas of Focus */}
    <div className="pt-5 border-t border-slate-800">
      <h3 className="text-white font-semibold mb-4">
        Areas of Focus
      </h3>

      <div className="flex flex-wrap gap-3">
        {focusAreas.map((area) => (
          <span
            key={area}
            className="px-4 py-2 rounded-full text-sm text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
);
}
