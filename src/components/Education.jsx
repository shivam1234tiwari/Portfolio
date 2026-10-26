
import education from "../data/education";
import { GraduationCap, CalendarDays, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-5xl px-5 sm:px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            <GraduationCap size={16} />
            Academic Journey
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            My <span className="text-cyan-600 dark:text-cyan-400">Education</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            My academic journey, where I continue building a strong foundation
            in computer applications and software development.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-cyan-500 via-blue-500/50 to-transparent sm:left-7" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <article
                key={item.id}
                className="group relative pl-14 sm:pl-20"
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-white text-cyan-600 shadow-md shadow-cyan-500/10 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400 dark:bg-slate-950 dark:text-cyan-300 sm:left-2 sm:h-12 sm:w-12">
                  <GraduationCap size={21} />
                </div>

                {/* Education card */}
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-950/5 dark:border-white/10 dark:bg-slate-900/70 dark:hover:shadow-cyan-950/20 sm:p-7">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                      <CalendarDays size={15} />
                      {item.year}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {index === 0 ? "Postgraduate" : "Undergraduate"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white sm:text-2xl">
                    {item.degree}
                  </h3>

                  <div className="mt-3 flex items-start gap-3">
                    <BookOpen
                      size={19}
                      className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400"
                    />

                    <h4 className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:text-base">
                      {item.college}
                    </h4>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-28" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
