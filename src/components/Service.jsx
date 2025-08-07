import React from 'react';
import { Settings } from "lucide-react";  // Icône adaptée pour "services"
import "../assets/Service.css";

const servicesList = [
  {
  title: "Développement Web Full-Stack",
  description: "Création d'applications web réactives et évolutives en utilisant React, Spring Boot, Laravel  et des bases de données.",
},
{
  title: "Développement et Intégration d'API",
  description: "Conception et implémentation d'API RESTful et GraphQL pour une communication fluide avec le backend.",
},
{
  title: "Implémentation UI/UX",
  description: "Transformation de maquettes en interfaces utilisateur fidèles, avec un accent sur l'expérience utilisateur.",
},
{
  title: "DevOps et Déploiement",
  description: "Mise en place de conteneurs Docker, de pipelines CI/CD et déploiement sur AWS ou d'autres plateformes cloud.",
}

];

export default function Service() {
  return (
    <section className="info" id="services">
      <h2 className="section-title">Services proposés</h2>

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
