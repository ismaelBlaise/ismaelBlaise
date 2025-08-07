import React from 'react';
import { Calendar } from "lucide-react";
import "../assets/Education.css";

const educationList = [
  {
    date: "2018 - 2021",
    diploma: "Bachelor's degree in Computer Science",
    institute: "University of Antananarivo, Madagascar",
  },
  {
    date: "2022",
    diploma: "Full-Stack Developer Certification",
    institute: "OpenClassrooms",
  },
  // Ajoute d'autres si nécessaire
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <ul className="education-list">
        {educationList.map(({ date, diploma, institute }, idx) => (
          <li key={idx} className="education-item">
            <Calendar size={20} className="education-icon" />
            <div className="education-info">
              <span className="education-date">{date}</span>
              <p className="education-diploma">{diploma}</p>
              <p className="education-institute">{institute}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
