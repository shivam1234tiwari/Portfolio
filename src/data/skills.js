
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend" },
  { name: "JavaScript", icon: FaJs, category: "Frontend" },
  { name: "React.js", icon: FaReact, category: "Frontend" },

  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "REST APIs", icon: FaNodeJs, category: "Backend" },
  { name: "JWT", icon: SiJsonwebtokens, category: "Backend" },

  { name: "MongoDB", icon: SiMongodb, category: "Databases" },
  { name: "MySQL", icon: SiMysql, category: "Databases" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Databases" },

  { name: "Git", icon: FaGitAlt, category: "Tools & Cloud" },
  { name: "GitHub", icon: FaGithub, category: "Tools & Cloud" },
  { name: "Linux", icon: FaLinux, category: "Tools & Cloud" },
  { name: "Docker", icon: FaDocker, category: "Tools & Cloud" },
  { name: "AWS", icon: FaAws, category: "Tools & Cloud" },
];

export default skills;
