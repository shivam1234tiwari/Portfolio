import React from "react";

const focusAreas = [
  "MERN Stack",
  "Backend Development",
  "REST APIs",
  "Database Design",
  "DevOps & Cloud",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
    >
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
        </h2>
      </div>

      {/* About Content */}
      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 leading-8 text-slate-600 shadow-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none md:p-10">
        <p>
          Hi, I'm{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            Rahul Tiwari
          </span>
          , an MCA student and aspiring Software Developer passionate about
          building scalable web applications and reliable backend systems.
        </p>

        <p>
          My primary focus is{" "}
          <span className="font-medium text-cyan-600 dark:text-cyan-400">
            MERN Stack and Backend Development
          </span>
          . I work with Node.js, Express.js, React.js, MongoDB, SQL databases,
          and REST APIs to build secure, efficient, and maintainable
          applications. I enjoy implementing authentication, designing
          database schemas, and structuring applications using clean
          architectural practices.
        </p>

        <p>
          Alongside development, I'm expanding my knowledge of{" "}
          <span className="font-medium text-cyan-600 dark:text-cyan-400">
            DevOps and Cloud Technologies
          </span>
          , including Docker, AWS, and CI/CD workflows, to understand how
          applications are deployed, maintained, and scaled in real-world
          environments.
        </p>

        <p>
          I believe in learning by building, solving practical problems, and
          continuously improving my technical skills. My goal is to contribute
          to meaningful projects, collaborate with development teams, and grow
          as a backend-focused Full Stack Developer.
        </p>

        {/* Areas of Focus */}
        <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
          <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
            Areas of Focus
          </h3>

          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-700 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 dark:text-cyan-300"
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
