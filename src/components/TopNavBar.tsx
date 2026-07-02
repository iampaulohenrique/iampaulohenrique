import React, { useState, useEffect } from 'react';

export const TopNavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'trabalhos', label: 'Trabalhos' },
    { id: 'contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131315]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,219,233,0.1)] transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 h-20 max-w-[1280px] mx-auto">
        <a href="#inicio" className="font-bold text-[24px] text-[#00dbe9] tracking-tighter">
          PH
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-sm uppercase tracking-widest transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-[#00f0ff] border-b-2 border-[#00f0ff] pb-1 font-bold'
                  : 'text-[#b9cacb] hover:text-[#e5e1e4]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a 
          href="#contato" 
          className="bg-[#00f0ff] text-[#00363a] font-mono text-sm px-6 py-2 rounded-lg hover:scale-105 active:scale-95 transition-transform neon-glow"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};