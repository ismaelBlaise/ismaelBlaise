import React from 'react';
import { Calendar } from "lucide-react";
import "../assets/Info.css";

const educationList = [
  {
    date: "2023 - Présent",
    diploma: "Licence en Informatique",
    institute: "IT University, Andoharanofotsy, Antananarivo",
  },
  {
    date: "2022 - 2023",
    diploma: "Baccalauréat Scientifique Série D",
    institute: "Lycée Saint Pierre Canisius, Ampahateza, Antananarivo",
  },
  {
    date: "2014 - 2017",
    diploma: "Baccalauréat Littéraire Série A2",
    institute: "Cours Accem, Analakely, Antananarivo",
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
