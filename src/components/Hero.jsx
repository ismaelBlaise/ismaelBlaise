import "../assets/Hero.css";
import profileImage from "../assets/profil.jpg";

export default function Hero() {
  const favoriteTechs = [
    "React",        
    "Spring Boot", 
    "PostgreSQL",   
    "Docker",      
    "AWS"           
    ];

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Ismael" 
              className="profile-image"
            />
            <div className="image-border-animation"></div>
          </div>
          <div className="intro-text">
            <h1 className="hero-title">
            Hi, I'm <span className="hero-highlight">Ismael</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer</p>
        </div>
        </div>

        <div className="text-content">
          
          <p className="hero-description">
            Passionate about creating elegant digital experiences with modern technologies. <br /><br />
            
            📍 Based in <span  className="tech-item">Antananarivo, Madagascar</span> &nbsp;| <br/><br/>&nbsp; 📞 Contact me <span className="tech-item">+261 34 55 525 10</span> &nbsp;|
            </p>


          <div className="tech-stack">
            {/* <h3 className="tech-stack-title">Tech Stack</h3> */}
            <div className="tech-list">
              {favoriteTechs.map((tech, index) => (
                <span key={index} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}