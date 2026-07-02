import type { Tool } from "../types";
import "./Skills.css";

const TOOLS: Tool[] = [
  { id: "vscode", label: "VS Code", icon: "code" },
  { id: "git", label: "Git / GitHub", icon: "hub" },
  { id: "postgres", label: "PostgreSQL", icon: "database" },
  { id: "docker", label: "Docker", icon: "dock" },
  { id: "grafana", label: "Grafana", icon: "monitoring" },
  { id: "jest", label: "Jest / Testing", icon: "speed" },
];

export default function Skills() {
  return (
    <main className="skills" id="skills">
      <div className="skills__inner container-max">
        {/* Hero da página */}
        <section className="skills-hero">
          <span className="skills-hero__eyebrow">TECHNICAL STACK // 01</span>
          <h1 className="skills-hero__title">
            Arquitetura de Sistemas &amp; <br />
            <span className="skills-hero__title-muted">Engenharia de Precisão.</span>
          </h1>
          <p className="skills-hero__description">
            Especializado em construir aplicações escaláveis e resilientes utilizando
            paradigmas modernos de desenvolvimento e infraestrutura em nuvem.
          </p>
        </section>

        {/* Bento Grid de habilidades principais */}
        <div className="skills-grid">
          {/* Web Development */}
          <div className="skills-card skills-card--web glass-card">
            <div className="skills-card__top">
              <div>
                <span className="material-symbols-outlined skills-card__icon">terminal</span>
                <h3 className="skills-card__title">Web Development</h3>
                <p className="skills-card__text">
                  Desenvolvimento Full-Stack com foco em performance, acessibilidade e
                  interfaces reativas de alta fidelidade.
                </p>
              </div>
              <div className="skills-card__tags">
                <span className="skills-tag">REACT</span>
                <span className="skills-tag">NODE.JS</span>
              </div>
            </div>
            <div className="skills-card__pills">
              <span className="skills-pill">
                <span className="skills-pill__dot" /> REACT
              </span>
              <span className="skills-pill">
                <span className="skills-pill__dot" /> TypeScript
              </span>
              <span className="skills-pill">
                <span className="skills-pill__dot" /> Java
              </span>
              <span className="skills-pill">
                <span className="skills-pill__dot" /> PHP
              </span>
              <span className="skills-pill">
                <span className="skills-pill__dot" /> SQL
              </span>
              <span className="skills-pill">
                <span className="skills-pill__dot" /> MySQL
              </span>
            </div>
          </div>

          {/* Cloud */}
          <div className="skills-card skills-card--cloud glass-card">
            <span className="material-symbols-outlined skills-card__bg-icon">cloud</span>
            <h3 className="skills-card__title">Cloud</h3>
            <p className="skills-card__text skills-card__text--spaced">
              Especialista em infraestrutura AWS com certificações ativas e foco em
              Serverless.
            </p>
            <div className="skills-card__list">
              <div className="skills-card__list-item">
                <span>AWS Certified</span>
                <span className="material-symbols-outlined skills-card__check">verified</span>
              </div>
              <div className="skills-card__list-item">
                <span>Oracle Academy</span>
                <span className="material-symbols-outlined skills-card__check">verified</span>
              </div>
            </div>
          </div>

          {/* APIs & Backend */}
          <div className="skills-card skills-card--api glass-card">
            <span className="material-symbols-outlined skills-card__icon">api</span>
            <div>
              <h3 className="skills-card__title">APIs</h3>
              <p className="skills-card__text">
                Design e implementação de APIs RESTful e GraphQL robustas e documentadas.
              </p>
            </div>
            <div className="skills-card__api-grid">
              <div className="skills-card__api-box">REST</div>
              <div className="skills-card__api-box">GraphQL</div>
            </div>
          </div>

          {/* OOP */}
          <div className="skills-card skills-card--oop glass-card">
            <div className="skills-card__oop-text">
              <h3 className="skills-card__title">Programação Orientada a Objetos</h3>
              <p className="skills-card__text">
                Sólidos conhecimentos em SOLID, Design Patterns e arquitetura de software
                limpa para sistemas sustentáveis a longo prazo.
              </p>
            </div>
            <div className="skills-card__oop-visual">
              <span className="material-symbols-outlined skills-card__oop-icon">
                account_tree
              </span>
              <div className="skills-card__oop-fade" />
            </div>
          </div>
        </div>

        {/* Toolbelt */}
        <section className="toolbelt">
          <div className="toolbelt__header">
            <div>
              <span className="toolbelt__eyebrow">TOOLBELT // 02</span>
              <h2 className="toolbelt__title">Ferramentas &amp; Fluxo</h2>
            </div>
            <p className="toolbelt__description">
              Utilizo as melhores ferramentas do mercado para garantir agilidade e
              qualidade no código entregue.
            </p>
          </div>

          <div className="toolbelt__grid">
            {TOOLS.map((tool) => (
              <div className="toolbelt__item glass-card" key={tool.id}>
                <span className="material-symbols-outlined toolbelt__icon">{tool.icon}</span>
                <span className="toolbelt__label">{tool.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Banner de certificação */}
        <section className="cert-banner glass-card">
          <div
            className="cert-banner__image"
            role="img"
            aria-label="Fotografia cinematográfica de uma sala de servidores futurista com luzes neon ciano, transmitindo precisão e infraestrutura em nuvem de alta tecnologia."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGJ6QgBvcgG4ImHGldHVT6TmanC9iwm7TdYFirQDRz_V68pt168MYMoodHS2NH8K4fTLp6O_ENupIbpFjL3DK9dtMkBBQGaWxqQnIL4f-xhgt1aYRvqZ41ZEuxdYuAT418z00tw7BG6W1L1hBthEpIRHL7OmR62eZx1fxkXp3lldqxg-xqdsIITUGFxdimp21AeEP4U00g1cZXU_bew1VSW69W5CxdChzrhwUC_1xfNLnovq21hHsQ')",
            }}
          />
          <div className="cert-banner__fade" />
          <div className="cert-banner__content">
            <div>
              <h2 className="cert-banner__title">Cloud Certified.</h2>
              <p className="cert-banner__text">
                Infraestrutura como código e deploy contínuo em ambientes de alta
                disponibilidade.
              </p>
            </div>
            <a className="cert-banner__link" href="https://drive.google.com/drive/folders/1Frz-c0AahWupY86STsUTEgPmuANXhU-J">
              VER CERTIFICAÇÕES
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
