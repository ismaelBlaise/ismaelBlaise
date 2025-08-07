import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Linkedin, Github, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import "../assets/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contacter moi</h2>
      
      <div className="contact-methods">
        <div className="contact-card">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <a href="mailto:your.email@example.com" className="contact-link">
              ismablaise@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <Phone size={24} />
          </div>
          <div className="contact-info">
            <h3>Phone</h3>
            <a href="tel:+261345552510" className="contact-link">
              +261 34 55 525 10
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <MapPin size={24} />
          </div>
          <div className="contact-info">
            <h3>Localisation</h3>
            <p>Antananarivo, Madagascar</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/blaise-isma%C3%ABl-andrianaivo-491177368/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/ismaelBlaise" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Github size={20} />
        </a>
        <a href="https://www.facebook.com/isma.bl2" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/andrianaiv.ismael/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram size={20} />
        </a>
        <a href="https://x.com/BlaiseIsma" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Twitter size={20} />
        </a>
        <a href="https://wa.me/261345552510" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp size={20} />
        </a>
      </div>

      <div className="contact-cta">
        <MessageSquare size={20} className="cta-icon" />
        <p>Besoin d'aide ou d'un projet ? Parlons-en !</p>
      </div>
    </section>
  );
}