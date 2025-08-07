import React from 'react';
import { Settings } from "lucide-react";  // Icône adaptée pour "services"
import "../assets/Service.css";

const servicesList = [
  {
    title: "Full-Stack Web Development",
    description: "Building responsive and scalable web applications using React, Node.js, and databases.",
  },
  {
    title: "API Development & Integration",
    description: "Designing and implementing RESTful and GraphQL APIs for seamless backend communication.",
  },
  {
    title: "UI/UX Design Implementation",
    description: "Transforming designs into pixel-perfect user interfaces with a focus on user experience.",
  },
  {
    title: "DevOps & Deployment",
    description: "Setting up Docker containers, CI/CD pipelines, and cloud deployments on AWS or other platforms.",
  },
];

export default function Service() {
  return (
    <section className="info" id="services">
      <h2 className="section-title">Services I Offer</h2>

      <ul className="info-list">
        {servicesList.map(({ title, description }, idx) => (
          <li key={idx} className="info-item">
            <Settings size={20} className="info-icon" />
            <div className="info-info">
              <p className="info-diploma">{title}</p>
              <p className="info-institute">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
