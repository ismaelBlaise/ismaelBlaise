import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Linkedin, Github, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import "../assets/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-methods">
        <div className="contact-card">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <a href="mailto:your.email@example.com" className="contact-link">
              your.email@example.com
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
            <h3>Location</h3>
            <p>Antananarivo, Madagascar</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Github size={20} />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Facebook size={20} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram size={20} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Twitter size={20} />
        </a>
        <a href="https://wa.me/261345552510" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp size={20} />
        </a>
      </div>

      <div className="contact-cta">
        <MessageSquare size={20} className="cta-icon" />
        <p>Need help or have a project in mind? Let's talk!</p>
      </div>
    </section>
  );
}