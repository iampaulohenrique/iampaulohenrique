import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData, SubmitStatus } from "../types";
import "./Contact.css";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "Novo Projeto",
  message: "",
};

const SOCIAL_GRID = [
  { id: "linkedin", label: "LinkedIn", icon: "link", url: "https://www.linkedin.com/in/iampaulohenrique/" },
  { id: "github", label: "GitHub", icon: "code", url: "https://github.com/iampaulohenrique" },
  { id: "instagram", label: "Instagram", icon: "photo_camera", url: "https://www.instagram.com/dev.paulohenrique/" },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 🛡️ Segurança: Campo Honeypot para capturar bots ocultamente
  const [honeypot, setHoneypot] = useState("");

  // 🛡️ Função para higienizar/sanitizar strings básicas (evita injeção de HTML no estado)
  function sanitizeInput(text: string): string {
    return text
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .trim();
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    // 🛡️ Defesa Antibot 1: Se o campo honeypot estiver preenchido, é um robô.
    if (honeypot !== "") {
      console.warn("Bot detectado via Honeypot.");
      setStatus("sent"); // Engana o bot simulando sucesso
      return;
    }

    // 🛡️ Validação Estrita de E-mail (Atrás do HTML5)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Por favor, insira um formato de e-mail válido.");
      return;
    }

    // 🛡️ Higienização dos dados antes do envio
    const cleanData = {
      name: sanitizeInput(formData.name),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject,
      message: sanitizeInput(formData.message),
    };

    setStatus("sending");

    // Simula a chamada de envio assíncrona (AQUI você enviará o cleanData para sua API)
    setTimeout(() => {
      setStatus("sent");

      setTimeout(() => {
        setStatus("idle");
        setFormData(INITIAL_FORM);
      }, 3000);
    }, 1500);
  }

  const buttonLabel =
    status === "sending"
      ? "ENVIANDO..."
      : status === "sent"
        ? "MENSAGEM ENVIADA!"
        : "ENVIAR MENSAGEM";

  return (
    <main className="contact engineering-grid" id="contact">
      <div className="contact__bg-glow contact__bg-glow--right" />
      <div className="contact__bg-glow contact__bg-glow--left" />

      <div className="contact__inner container-max">
        <div className="contact__headline">
          <span className="contact__eyebrow">Estabelecer Conexão</span>
          <h1 className="contact__title">
            VAMOS
            <br />
            <span className="contact__title-muted">CONSTRUIR O FUTURO.</span>
          </h1>
        </div>

        <div className="contact__grid">
          <div className="contact__form-col">
            <div className="contact__form-card glass-card">
              <form className="contact-form" onSubmit={handleSubmit}>

                {/* 🛡️ Campo Invisível Honeypot (Usuários normais não veem, bots preenchem automaticamente) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_security_check"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="name">
                      Nome
                    </label>
                    <input
                      className="contact-form__input"
                      id="name"
                      name="name"
                      placeholder="Seu Nome"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={80} // 🛡️ Evita payloads gigantescos
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="contact-form__input"
                      id="email"
                      name="email"
                      placeholder="seu@email.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={120}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor="subject">
                    Assunto
                  </label>
                  <select
                    className="contact-form__select"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option>Novo Projeto</option>
                    <option>Oportunidade de Trabalho</option>
                    <option>Consultoria</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor="message">
                    Mensagem
                  </label>
                  <textarea
                    className="contact-form__textarea"
                    id="message"
                    name="message"
                    placeholder="Descreva sua ideia ou necessidade..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1500} // 🛡️ Impede flood de dados no banco de dados
                    required
                  />
                </div>

                {/* Feedback visual de erro caso quebre alguma validação do front */}
                {errorMessage && (
                  <p style={{ color: '#ff5555', fontSize: '14px', marginBottom: '15px' }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  className={`contact-form__submit neon-glow ${status === "sent" ? "contact-form__submit--sent" : ""
                    }`}
                  // 🛡️ Desativa o botão se estiver enviando ou enviado (impede spam de clique)
                  disabled={status === "sending" || status === "sent"}
                  type="submit"
                >
                  {buttonLabel}
                  <span className="material-symbols-outlined contact-form__submit-icon">
                    send
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="contact__info-col">
            <div className="contact-info-card glass-card">
              <div className="contact-info-card__icon">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div>
                <p className="contact-info-card__label">E-mail Direto</p>
                <a className="contact-info-card__value" href="mailto:contatoiampaulohenrique@gmail.com">
                  dev.paulohenrique
                  @gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card glass-card">
              <div className="contact-info-card__icon">
                <span className="material-symbols-outlined">phone_iphone</span>
              </div>
              <div>
                <p className="contact-info-card__label">WhatsApp</p>
                <a className="contact-info-card__value" href="#">
                  +55 11 5500-4630
                </a>
              </div>
            </div>

            <div className="contact__socials">
              <h3 className="contact__socials-title">Siga o Processo</h3>
              <div className="contact__socials-grid">
                {SOCIAL_GRID.map((social) => (
                  <a
                    className="contact__social-link glass-card"
                    href={social.url} // <--- Links dinâmicos aqui
                    key={social.id}
                    target="_blank"   // Opcional: Abre em uma nova aba
                    rel="noreferrer"  // Opcional: Segurança ao abrir nova aba
                  >
                    <span className="material-symbols-outlined contact__social-icon">
                      {social.icon}
                    </span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-map">
              <div
                className="contact-map__image"
                role="img"
                aria-label="Mapa estilizado indicando a localização em São Paulo, Brasil"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABUjS3ozzygDcu1EAV8hHy_rsNx34fxMQiwEjdy5yLxnfk1QV6zyABUvITEWqFrWEvzfsmgHN9ppD8Adgdqcf1bBAqPGLqnVvSEClJW1cLdj6wt4PD1Jzct9wpgiVQgnQJuXeqW1pQP_ItaPI6yFh1whuRYGv0o_jJzh71qhdXyH1h7YkuEqnVTD0IIifFLg4P9ehhh0u-uA4B3fzxwBJjC4dbtLzsgxlgiRRaV_DF8VMA3sizqj3e')",
                }}
              />
              <div className="contact-map__badge">
                <span className="contact-map__badge-dot" />
                Localização: São Paulo, BR
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}