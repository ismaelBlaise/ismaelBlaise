import React, { useState } from 'react';
import { Code, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import "../assets/Project.css";
import Folder from '../assets/folder.png'; // Default image for projects
import Portfolio from '../assets/project-portfolio.png'; // Example image for a specific project
import FournisseurApi from '../assets/project-fournisseur-api.png'; // Example image for another project
import Framework from '../assets/project-framework.png'; // Example image for a framework project
import Pharmacie from '../assets/project-pharmacie.png'; // Example image for a pharmacy management project

const projectData = [
  {
    id: 1,
    title: 'Portfolio Développeur',
    mainImage: Portfolio, // Icône Lucide représentant un dossier
    description: "Un portfolio moderne et responsive développé avec React  . Il comprend des animations fluides,  , ainsi qu'une section de présentation de projets.",
    technologies: ['React', 'React Icon', 'Lucide React'],
    githubLink: 'https://github.com/ismaelBlaise/ismaelBlaise',
    liveDemo: 'https://andrianaivo-blaise-ismael.netlify.app/'
  },
  {
    id: 2,
    title: "API RESTful Fournisseur d'identité",
    mainImage: FournisseurApi,
    description: "Une API backend sécurisée et évolutive développée avec Laravel. Elle prend en charge l'authentification via jeton (token), la validation par code PIN pour les opérations sensibles, ainsi que la réinitialisation sécurisée du mot de passe. L’API est connectée à une base de données PostgreSQL et suit les normes RESTful.",
    technologies: ['Laravel', 'PostgreSQL', 'JWT', 'API REST'],
    githubLink: 'https://github.com/yourusername/laravel-auth-api',
    liveDemo: '#'
    },

  {
    id: 3,
    title: 'Framework de Développement Web Java',
    mainImage: Framework,
    description: 'un framework de développement web Java complet, conçu pour simplifier la création d’applications web robustes. Il inclut des fonctionnalités telles que la gestion des sessions, la validation des formulaires, et un moteur de templates pour générer des pages dynamiques.',
    technologies: ['Java', 'JEE', 'JSP','Servlets'],
    githubLink: 'https://github.com/ismaelBlaise/framework-java',
    liveDemo: '#'
  },

  {
    id: 4,
    title: 'Application de Gestion de pharmacie',
    mainImage: Pharmacie,
    description: 'un système de gestion de pharmacie complet, développé avec Spring Boot et thymeleaf. Il permet la gestion des stocks de médicaments, la facturation des clients, et le suivi des ventes. L’application utilise une base de données PostgreSQL pour stocker les informations.',
    technologies: ['Java', 'Spring bot', 'Thymeleaf','PostgreSQL'],
    githubLink: 'https://github.com/ismaelBlaise/pharmacie',
    liveDemo: '#'
  },
 
];

export default function Project() {
  const [showAll, setShowAll] = useState(false);
  const defaultDisplayCount = 4; // Afficher 4 projets par défaut
  const displayedProjects = showAll ? projectData : projectData.slice(0, defaultDisplayCount);
  const hasMoreProjects = projectData.length > defaultDisplayCount;

  return (
    <section className="info" id="projects">
      <h2 className="section-title">Mes projets</h2>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <Code size={16} /> View Code
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="view-all-container">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="view-all-button"
          >
            {showAll ? (
              <>
                <ChevronUp size={16} /> Voir moins
              </>
            ) : (
              <>
                <ChevronDown size={16} /> Voir tout ({projectData.length - defaultDisplayCount} de plus)
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}