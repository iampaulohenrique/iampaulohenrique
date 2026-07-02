import "./Footer.css";
// Reaproveitando a mesma imagem do logo que você usou na Navbar
import logoImg from "../assets/logotipo1.png"; 

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iampaulohenrique/" },
  { label: "GitHub", href: "https://github.com/iampaulohenrique" },
  { label: "Instagram", href: "https://www.instagram.com/dev.paulohenrique/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container-max">
        {/* Substituído o texto PH pela tag img */}
        <span className="footer__logo">
          <img 
            src={logoImg} 
            alt="Logo" 
            style={{ height: '32px', width: 'auto', display: 'block' }} // Um pouco menor para o rodapé, ajuste se necessário
          />
        </span>

        <p className="footer__copy">© 2026 Paulo Henrique.</p>

        <div className="footer__links">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.label} 
              className="footer__link" 
              href={link.href}
              target="_blank"   // Opcional: Abre em uma nova aba
              rel="noreferrer"  // Opcional: Segurança para links externos
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}