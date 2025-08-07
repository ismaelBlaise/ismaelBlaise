import React from 'react';
import { Briefcase } from "lucide-react";
import "../assets/Info.css";


const experienceList = [
  {
    date: "Jan 2024 - Juin 2024",
    title: "Développeur Full Stack",
    company: "Relia Consulting",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    date: "Août 2023 - Décembre 2023",
    title: "Développeur Frontend",
    company: "Startup TanaTech",
    technologies: ["React", "Tailwind CSS", "Redux"],
  },
  {
    date: "Juin 2023 - Juillet 2023",
    title: "Stagiaire Backend",
    company: "IT Solutions MG",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section className="info" id="experience">
      <h2 className="section-title">Professional Experience</h2>

      <ul className="info-list">
        {experienceList.map(({ date, title, company, technologies }, idx) => (
          <li key={idx} className="info-item">
            <Briefcase size={20} className="info-icon" />
            <div className="info-info">
              <span className="info-date">{date}</span>
              <p className="info-diploma">{title}</p>
              <p className="info-institute">{company}</p>
              <div className="tech-stack">
                {technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
