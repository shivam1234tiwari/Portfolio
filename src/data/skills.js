import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, level: "95%" },
  { name: "CSS3", icon: FaCss3Alt, level: "90%" },
  { name: "JavaScript", icon: FaJs, level: "90%" },
  { name: "React.js", icon: FaReact, level: "85%" },
  { name: "Node.js", icon: FaNodeJs, level: "90%" },
  { name: "Express.js", icon: SiExpress, level: "88%" },
  { name: "MongoDB", icon: SiMongodb, level: "88%" },
  { name: "MySQL", icon: SiMysql, level: "85%" },
  { name: "PostgreSQL", icon: SiPostgresql, level: "80%" },
  { name: "GitHub", icon: FaGithub, level: "90%" },
  { name: "Docker", icon: FaDocker, level: "75%" },
  { name: "AWS", icon: FaAws, level: "75%" },
];

export default skills;