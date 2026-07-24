import React from 'react';
import { Database, Server, Layout, ShieldCheck, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL', 'Data Structures & Algorithms', 'OOP', 'DBMS'],
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Middleware Design', 'MVC Architecture', 'Bcrypt'],
    },
    {
      title: 'Frontend & UI',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: ['React.js', 'Tailwind CSS', 'Redux (basics)', 'Responsive Web Design'],
    },
    {
      title: 'Databases & Cloud',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      skills: ['MongoDB', 'Mongoose ODM', 'MySQL', 'PostgreSQL', 'AWS EC2 / Fundamentals', 'Git & GitHub', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical <span className="text-cyan-400">Skills</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}