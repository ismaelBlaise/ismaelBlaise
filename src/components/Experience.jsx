import React from 'react';
import { Briefcase } from "lucide-react";
import "../assets/Info.css";


const experienceList = [
  {
    date: "2022 - 2025",
    title: "Développeur Full Stack & Chef d’équipe",
    company: "IT University – Antananarivo",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
  } ,
];

export default function Experience() {

   
  return (
    <section className="info" id="experience">
      <h2 className="section-title">Experiences Professionnel</h2>

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
