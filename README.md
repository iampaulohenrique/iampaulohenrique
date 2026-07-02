# Paulo Henrique — Portfólio (React + TypeScript)

Conversão do portfólio original (4 páginas HTML estáticas com Tailwind via CDN) para uma
aplicação **React 18 + TypeScript + Vite**, com roteamento client-side e CSS separado por
componente/página.

## Stack

- **React 18** + **TypeScript**
- **React Router v6** — navegação entre páginas sem reload
- **Vite** — build e dev server
- CSS puro (sem framework), organizado em arquivos por componente/página
- Google Fonts: Inter, JetBrains Mono, Geist, Material Symbols Outlined

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # build de produção (gera /dist)
npm run preview   # serve o build de produção localmente
```

## Estrutura do projeto

```
src/
├── components/        # Componentes compartilhados entre páginas
│   ├── Navbar.tsx / .css
│   ├── Footer.tsx / .css
│   ├── Layout.tsx          # Navbar + <Outlet /> + Footer
│   └── ProjectCard.tsx / .css
├── pages/              # Uma página por rota
│   ├── Home.tsx / .css        → "/"            (Início + Sobre)
│   ├── Skills.tsx / .css      → "/habilidades" (Bento grid + Toolbelt)
│   ├── Projects.tsx / .css    → "/trabalhos"   (Grid de projetos)
│   └── Contact.tsx / .css     → "/contato"     (Formulário controlado)
├── styles/
│   ├── variables.css   # Design tokens (cores, espaçamento, tipografia)
│   └── global.css      # Reset, classes utilitárias (.glass-card, .neon-glow etc.)
├── types/
│   └── index.ts         # Interfaces TypeScript (Project, Tool, ContactFormData...)
├── App.tsx               # Definição das rotas
└── main.tsx               # Ponto de entrada
```

## O que mudou em relação ao HTML original

1. **Tailwind via CDN → CSS próprio**: as classes utilitárias do Tailwind (que dependiam
   de um `tailwind.config` inline repetido em cada página) foram convertidas em CSS comum,
   com os mesmos valores de cor/espaçamento/tipografia preservados como variáveis CSS em
   `styles/variables.css`.
2. **4 páginas HTML → 4 rotas React Router**: a navegação agora é feita via `<Link>` /
   `<NavLink>`, sem reload de página. O link "Sobre" no menu aponta para `/#sobre` (seção
   dentro da Home).
3. **Navbar e Footer**: estavam duplicados nos 4 arquivos originais; agora são componentes
   únicos (`Navbar.tsx`, `Footer.tsx`) compartilhados via `Layout.tsx`.
4. **Formulário de contato**: o script vanilla JS que simulava o envio (trocando o texto do
   botão) foi reescrito como estado React (`useState`) com tipos (`ContactFormData`,
   `SubmitStatus`), mantendo o mesmo comportamento visual (enviando → enviado → reset).
5. **Dados como arrays tipados**: listas repetitivas (ferramentas do toolbelt, projetos,
   redes sociais) foram extraídas para arrays TypeScript e renderizadas via `.map()`, em
   vez de HTML repetido manualmente.
6. **Acessibilidade**: inputs do formulário ganharam `<label htmlFor>` associado por `id`;
   imagens decorativas de fundo (mapa, banner) usam `role="img"` + `aria-label`.

## Notas

- O conteúdo de texto (textos de exemplo, links `#`, dados de contato fictícios) foi mantido
  fiel ao material original — são apenas placeholders e podem ser substituídos livremente.
- O parágrafo final da seção "Sobre mim" estava cortado no HTML de origem; foi completado de
  forma coerente com o restante do texto.
