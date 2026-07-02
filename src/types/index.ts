/** Item de navegação usado na Navbar */
export interface NavItem {
  label: string;
  href: string;
}

/** Tag de tecnologia exibida em badges (ex: "REACT", "TYPESCRIPT") */
export type TechTag = string;

/** Card de projeto exibido na página de Trabalhos */
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: TechTag[];
  liveUrl?: string;
  githubUrl?: string;
  size: "large" | "regular" | "feature";
}

/** Ferramenta exibida na grade do "Toolbelt" na página de Habilidades */
export interface Tool {
  id: string;
  label: string;
  icon: string; // nome do ícone Material Symbols
}

/** Link social usado no rodapé e na página de contato */
export interface SocialLink {
  id: string;
  label: string;
  icon?: string;
  href: string;
}

/** Opções do campo "Assunto" no formulário de contato */
export type ContactSubject =
  | "Novo Projeto"
  | "Oportunidade de Trabalho"
  | "Consultoria"
  | "Outros";

/** Estado dos campos do formulário de contato */
export interface ContactFormData {
  name: string;
  email: string;
  subject: ContactSubject;
  message: string;
}

/** Status de envio do formulário, usado para feedback visual no botão */
export type SubmitStatus = "idle" | "sending" | "sent";
