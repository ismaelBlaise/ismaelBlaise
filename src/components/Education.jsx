import React from 'react';
import { Calendar } from "lucide-react";
import "../assets/Info.css";

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
 
];

export default function Education() {
  return (
    <section className="info" id="education">
      <h2 className="section-title">Education</h2>
      <ul className="info-list">
        {educationList.map(({ date, diploma, institute }, idx) => (
          <li key={idx} className="info-item">
            <Calendar size={20} className="info-icon" />
            <div className="info-info">
              <span className="info-date">{date}</span>
              <p className="info-diploma">{diploma}</p>
              <p className="info-institute">{institute}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
