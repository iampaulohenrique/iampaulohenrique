import "./Home.css";
import fotoPerfil from "../assets/perfil.png"
import fotoFront from "../assets/front.gif"

export default function Home() {
  // Função auxiliar para fazer o scroll macio ao clicar nos botões da Home
  const handleScroll = (id: string) => {
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
    <main>
      {/* Hero Section — ID ajustado de "inicio" para "home" */}
      <section className="hero engineering-grid scanline" id="home">
        <div className="hero__inner container-max">
          <div className="hero__content">
            <div className="hero__badge glass-card">
              <span className="hero__badge-text">Disponível para novos projetos</span>
            </div>

            <h1 className="hero__title">
              Programação fácil
              <br />
              <span className="hero__title-accent neon-text-glow">Desenvolvimento web!</span>
            </h1>

            <p className="hero__description">
              Crie seu site com a gente! Acreditamos que todo projeto merece uma presença
              online única. Desenvolvemos sites modernos, rápidos e totalmente
              personalizados para o seu negócio ou ideia. Sua visão em um site funcional e
              atraente.
            </p>

            <div className="hero__actions">
              {/* Modificado de <Link> para <button> com scroll nativo */}
              <button
                className="hero__btn-primary neon-glow"
                onClick={() => handleScroll("contact")}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Solicite um orçamento
              </button>
              <button
                className="hero__btn-secondary"
                onClick={() => handleScroll("projects")}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Ver trabalhos
              </button>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-glow" />
            <div className="hero__visual-card glass-card" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={fotoFront}
                alt="Ilustração principal do portfólio"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(1.1)',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* About Me Section */}
      <section className="about" id="sobre">
        <div className="about__inner container-max">
          <div className="about__image-wrapper glass-card">
            <div className="about__image-frame">
              <img
                className="about__image"
                alt="Retrato profissional de Paulo Henrique, engenheiro de software, em um estúdio futurista com luzes neon ciano."
                src={fotoPerfil}
              />
              <div className="about__image-fade" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__heading">
              <h2 className="about__title">
                Sobre <span className="about__title-accent">mim</span>
              </h2>
              <div className="about__divider" />
            </div>

            <div className="about__text">
              <p>
                Estudante de Ciência da Computação, com experiência em suporte técnico,
                operação de recursos multimídia e produção audiovisual. Possuo conhecimentos em
                HTML, CSS, JavaScript, React, TypeScript, Java, Git e GitHub, além de certificações
                em AWS Cloud Foundations e Microsoft GitHub.
              </p>
              <p>
                Também possuo experiência na criação de APIs e no desenvolvimento de sistemas orientados a objetos, o que me permite entregar soluções completas, do front-end ao back-end.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}