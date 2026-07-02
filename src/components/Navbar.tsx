import { useState } from "react";
import "./Navbar.css";
// Ajuste o caminho abaixo para a pasta real onde está a sua imagem
import logoImg from "../assets/logotipo1.png"; 

const NAV_ITEMS = [
  { label: "Início", to: "home" },
  { label: "Habilidades", to: "skills" },
  { label: "Trabalhos", to: "projects" },
  { label: "Contato", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsOpen(false); // Fecha o dropdown mobile se estiver aberto

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__inner container-max">
        {/* Botão do Logo com a Tag <img> */}
        <button 
          className="navbar__logo" 
          onClick={() => handleScroll("home")}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <img 
            src={logoImg} 
            alt="Logo" 
            style={{ height: '40px', width: 'auto', display: 'block' }} // Ajuste o tamanho conforme necessário
          />
        </button>

        {/* Links de navegação com toggle simples */}
        <nav className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.to)}
              className="navbar__link"
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'inherit',
                letterSpacing: 'inherit'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Botão de decoração/CTA mantido EXATAMENTE no mesmo lugar */}
        <button 
          className="navbar__cta neon-glow" 
          onClick={() => handleScroll("contact")}
          style={{ border: 'none', cursor: 'pointer' }}
        >
          Solicite um orçamento
        </button>

        {/* Ícone de menu sutil adicionado ao final, sem empurrar os outros elementos */}
        <button 
          className="navbar__toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </header>
  );
}