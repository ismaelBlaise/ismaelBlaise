import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaJava 
} from 'react-icons/fa';
import { 
  SiJavascript, SiDjango, SiFlask, SiTypescript, SiTailwindcss, SiBootstrap,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiLinux, SiNextdotjs,
  SiSpringboot, SiRedux, SiVite
} from 'react-icons/si';
import '../assets/Competence.css';

const technologies = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  // { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  // { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiDjango />, name: "Django" },
  // { icon: <SiFlask />, name: "Flask" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiLinux />, name: "Linux" },
];

export default function Competence() {
  return (
    <section id="competence">
      {/* <h2 className="section-title">Skills</h2> */}
      <ul className="icon-list">
        {technologies.map(({ icon, name }, index) => (
          <li className="icon-item" key={index}>
            <span className="tooltip">{name}</span>
            {icon}
            
          </li>
        ))}
      </ul>
    </section>
  );
}
