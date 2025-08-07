import React from 'react';
import { Heart } from 'lucide-react';
import "../assets/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Made with <Heart size={14} className="heart-icon" /> by Andrianaivo Blaise Ismael
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;