import React from "react";
import {
  Database,
  Server,
  Layout,
  Cpu,
  Cloud,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Core",
    icon: Cpu,
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL", "OOP", "DBMS"],
  },
  {
    title: "Backend & API Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Bcrypt",
      "Middleware",
      "MVC Architecture",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "AWS EC2",
      "AWS IAM",
      "AWS S3",
      "AWS RDS",
      "AWS Lambda",
      "AWS CLI",
      "Docker",
      "CI/CD Fundamentals",
    ],
  },
  {
    title: "Tools & Security",
    icon: ShieldCheck,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Thunder Client",
      "API Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Heading */}{" "}
      <div className="text-center mb-12">
        {" "}
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          What I work with{" "}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Technologies and tools I use to build web applications, develop
          backend services, manage databases, and explore cloud infrastructure.
        </p>
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-700/60 transition-all duration-200 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
