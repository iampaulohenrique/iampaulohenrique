import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";
import "./Projects.css";
import fotoReci from "../assets/reci.webp";
import zombiePlague from "../assets/zombieplague.webp";
import PensarEComunicar from "../assets/pensarecomunicar.webp";
// Deixei um espaço reservado aqui para quando você for importar sua imagem local
// import imagemDestaque from "../assets/sua-imagem.jpg";

const PROJECTS: Project[] = [
  {
    id: "zombieplague",
    title: "Zombie Plague",
    description:
      "É uma plataforma web voltada à comunidade de Counter-Strike 1.6, servindo como a central oficial e landing page de um ecossistema focado no clássico modo de jogo Zombie Plague. Com uma interface escura, moderna e temática predominantemente verde (remetendo à estética de infecção e biohazard), a plataforma funciona como o ponto de partida para novos jogadores e o centro de conexões da comunidade. O site foi desenhado para ser intuitivo e direto ao ponto, destacando os diferenciais técnicos do servidor, facilitando o acesso aos canais de comunicação oficiais e indicando o status de desenvolvimento do projeto.",
    imageUrl: zombiePlague,
    imageAlt:
      "Interface minimalista do e-site do servidor, com paleta monocromática e detalhes em verde.",
    tags: ["AMX MOD X |", "PHP |", "TAILWIND"],
    size: "regular",

  },
  {
    id: "vortex",
    title: "Pensar e Comunicar (Acadêmico)",
    description:
      "O projeto consiste no desenvolvimento conceitual e estrutural de uma plataforma educacional voltada para o ensino e aprendizado da língua inglesa, potencializada por ferramentas de Inteligência Artificial (IA). A concepção da plataforma foi fundamentada em uma revisão bibliográfica e análise de artigos acadêmicos que discutem a eficácia do Processamento de Linguagem Natural (PLN) e do aprendizado adaptativo no desenvolvimento de competências linguísticas (fala, escuta, leitura e escrita).",
    imageUrl:
      PensarEComunicar,
    imageAlt:
      "Interface futurista de gerenciamento de projetos com gráfico de Gantt holográfico sobre fundo obsidiana com destaques em ciano e violeta.",
    tags: ["HTML |", "CSS3"],
    size: "regular",
  },
];

export default function Projects() {
  return (
    <main className="projects" id="projects">
      <div className="projects__inner container-max">
        {/* Hero da página */}
        <section className="projects-hero">
          <span className="projects-hero__badge">Portfolio 2026</span>
          <h1 className="projects-hero__title">
            Trabalhos <span className="projects-hero__title-accent neon-text-glow">Selecionados.</span>
          </h1>
          <p className="projects-hero__description">
            Uma exibição de engenharia digital focada em performance, interfaces fluidas e
            arquiteturas escaláveis. Cada projeto é um experimento em precisão.
          </p>
        </section>

        {/* Grid de projetos */}
        <div className="projects-grid">
          {/* Projeto destaque: Reciclagem de Materiais */}
          <div className="feature-card glass-card feature-card--full-media">
            {/* Removemos os estilos inline antigos para deixar o CSS controlar o tamanho total */}
            <div className="feature-card__media">
              <div className="feature-card__overlay" />
              <img
                className="feature-card__image"
                alt="Dashboard de reciclagem de materiais."
                src={fotoReci}
              />
            </div>

            <div className="feature-card__body">
              <div className="feature-card__tags">
                <span className="feature-card__tag">REACT</span>
                <span className="feature-card__tag">TYPESCRIPT</span>
                <span className="feature-card__tag">PHP</span>
                <span className="feature-card__tag">MySQL</span>
              </div>
              <h3 className="feature-card__title">Recilagem de Materiais</h3>
              <p className="feature-card__description">
                Plataforma completa de gerenciamento e logística reversa inteligente.
              </p>
              <div className="feature-card__actions">
                <a className="feature-card__link underline-animate" href="https://www.reciclagemdemateriais.com.br/">
                  VIEW LIVE
                  <span className="material-symbols-outlined feature-card__link-icon">
                    north_east
                  </span>
                </a>
                <a className="feature-card__github" href="#">
                  GITHUB
                </a>
              </div>
            </div>
          </div>

          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Projeto experimental: Neural Canvas */}
          <div className="experiment-card glass-card">
            <div className="experiment-card__content">
              <div className="experiment-card__panel">
                <div className="experiment-card__eyebrow">EXPERIMENTAÇÃO</div>
                <h3 className="experiment-card__title">Neural Canvas</h3>
                <p className="experiment-card__description">
                  Uma interface experimental explorando a intersecção entre IA Generativa e
                  manipulação de vetores no browser através de shaders customizados.
                </p>
                <button className="experiment-card__button" type="button">
                  LAUNCH EXPERIMENT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de contato */}
        <section className="projects-cta">
          <div className="projects-cta__glow projects-cta__glow--top" />
          <div className="projects-cta__glow projects-cta__glow--bottom" />
          <div className="projects-cta__content">
            <h2 className="projects-cta__title">
              Vamos construir o{" "}
              <span className="projects-cta__title-accent">próximo nível?</span>
            </h2>
            <p className="projects-cta__description">
              Estou sempre em busca de projetos desafiadores e parcerias inovadoras. Entre
              em contato para discutirmos sua ideia.
            </p>
            <div className="projects-cta__actions">
              <a className="projects-cta__btn-primary neon-glow" href="mailto:contato@ph.dev">
                <span className="material-symbols-outlined">mail</span> START A PROJECT
              </a>
              <a className="projects-cta__btn-secondary" href="#">
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}