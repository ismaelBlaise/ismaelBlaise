import "../assets/Header.css";
import { Github, Linkedin, Mail, ChevronDown, Sun, Moon, Languages } from "lucide-react";
// import { useState } from "react";

export default function Header() {
  // const [darkMode, setDarkMode] = useState(false);
  // const [language, setLanguage] = useState('fr');
  // const [showLangDropdown, setShowLangDropdown] = useState(false);
  // const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  // const toggleTheme = (mode) => {
  //   setDarkMode(mode);
  //   document.body.classList.toggle('dark', mode);
  //   setShowThemeDropdown(false);
  // };

  // const changeLanguage = (lang) => {
  //   setLanguage(lang);
  //   setShowLangDropdown(false);
  // };

  return (
    <header id="header">
      <div className="logo">
        <span className="name">&lt;Ismael/&gt;</span>
      </div>

      <div className="controls">
        <div className="social-links">
          <a href="https://github.com/ismaelBlaise"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/blaise-isma%C3%ABl-andrianaivo-491177368/"><Linkedin size={20} /></a>
          <a href="mailto:ismablaise@gmail.com"><Mail size={20} /></a>
        </div>

        {/* <div className="utils-container">
          
          <div className="dropdown-container">
            <button 
              className="dropdown-toggle"
              onClick={() => {
                setShowLangDropdown(!showLangDropdown);
                setShowThemeDropdown(false);
              }}
            >
              <Languages size={14} />{language === 'fr' ? 'Fr' : 'En'}
              <ChevronDown size={12} className={`icon-chevron ${showLangDropdown ? 'rotate' : ''}`} />
            </button>

            {showLangDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => changeLanguage('fr')}>
                  <span className="flag">🇫🇷</span> Français
                </button>
                <button onClick={() => changeLanguage('en')}>
                  <span className="flag">🇬🇧</span> English
                </button>
              </div>
            )}
          </div>

         
        
          <div className="dropdown-container">
            <button 
              className="dropdown-toggle"
              onClick={() => {
                setShowThemeDropdown(!showThemeDropdown);
                setShowLangDropdown(false);
              }}
            >
              {darkMode ? <Moon size={16} /> : <Sun size={16} />}
              <ChevronDown size={14} className={`icon-chevron ${showThemeDropdown ? 'rotate' : ''}`} />
            </button>

            {showThemeDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => toggleTheme(false)}>
                  <Sun size={16} /> Light
                </button>
                <button onClick={() => toggleTheme(true)}>
                  <Moon size={16} /> Dark
                </button>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </header>
  );
}