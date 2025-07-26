import "../assets/Header.css";

export default function Header() {
  return (
    <header id="header">
      <div className="logo">Ismael Blaise</div>
      <nav className="nav-links">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
