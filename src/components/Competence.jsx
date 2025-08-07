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

export default function Competence() {
  return (
    <section id="competence">
      {/* <h2 className="section-title">Skills</h2> */}
      <ul className="icon-list">
        <li className="icon-item"><FaHtml5 title="HTML5" /></li>
        <li className="icon-item"><FaCss3Alt title="CSS3" /></li>
        <li className="icon-item"><SiJavascript title="JavaScript" /></li>
        {/* <li className="icon-item"><SiTypescript title="TypeScript" /></li> */}
        <li className="icon-item"><FaReact title="React" /></li>
        {/* <li className="icon-item"><SiNextdotjs title="Next.js" /></li> */}
        <li className="icon-item"><SiRedux title="Redux" /></li>
        <li className="icon-item"><SiVite title="Vite" /></li>
        <li className="icon-item"><SiTailwindcss title="Tailwind CSS" /></li>
        <li className="icon-item"><SiBootstrap title="Bootstrap" /></li>
        <li className="icon-item"><FaNodeJs title="Node.js" /></li>
        <li className="icon-item"><FaPython title="Python" /></li>
        <li className="icon-item"><SiDjango title="Django" /></li>
        {/* <li className="icon-item"><SiFlask title="Flask" /></li> */}
        <li className="icon-item"><FaJava title="Java" /></li>
        <li className="icon-item"><SiSpringboot title="Spring Boot" /></li>
        <li className="icon-item"><SiPostgresql title="PostgreSQL" /></li>
        <li className="icon-item"><SiMysql title="MySQL" /></li>
        <li className="icon-item"><SiMongodb title="MongoDB" /></li>
        <li className="icon-item"><SiFirebase title="Firebase" /></li>
        <li className="icon-item"><FaDocker title="Docker" /></li>
        <li className="icon-item"><FaGitAlt title="Git" /></li>
        <li className="icon-item"><SiLinux title="Linux" /></li>
       
      </ul>
    </section>
  );
}
