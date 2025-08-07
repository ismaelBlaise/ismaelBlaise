import React, { useState } from 'react';
import { Code, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import "../assets/Project.css";
import ProjectImage from '../assets/profil.jpg'; // Default image for projects

const projectData = [
  {
    id: 1,
    title: 'Developer Portfolio',
    mainImage: ProjectImage,
    description: 'A modern, responsive portfolio built with React and Tailwind CSS. Features smooth animations, contact form integration, and project showcases.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/yourusername/portfolio',
    liveDemo: 'https://yourportfolio.com'
  },
  {
    id: 2,
    title: 'RESTful API Service',
    mainImage: ProjectImage,
    description: 'A scalable backend API built with Node.js and Express. Features JWT authentication and MongoDB integration.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/yourusername/api-service',
    liveDemo: 'https://api.yourservice.com/docs'
  },
  {
    id: 3,
    title: 'Flask Web Application',
    mainImage: ProjectImage,
    description: 'A full-stack web application with Python Flask backend. Includes user authentication and responsive templates.',
    technologies: ['Python', 'Flask', 'SQLAlchemy'],
    githubLink: 'https://github.com/yourusername/flask-app',
    liveDemo: 'https://yourapp.com'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    mainImage: ProjectImage,
    description: 'A complete e-commerce solution with product listings, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    githubLink: '#',
    liveDemo: '#'
  },
  {
    id: 5,
    title: 'Task Management App',
    mainImage: ProjectImage,
    description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
    technologies: ['React', 'Redux', 'Firebase'],
    githubLink: '#',
    liveDemo: '#'
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    mainImage: ProjectImage,
    description: 'Real-time weather information with 5-day forecasts and location search.',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
    githubLink: '#',
    liveDemo: '#'
  }
];

export default function Project() {
  const [showAll, setShowAll] = useState(false);
  const defaultDisplayCount = 4; // Afficher 4 projets par défaut
  const displayedProjects = showAll ? projectData : projectData.slice(0, defaultDisplayCount);
  const hasMoreProjects = projectData.length > defaultDisplayCount;

  return (
    <section className="info" id="projects">
      <h2 className="section-title">Projects</h2>

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