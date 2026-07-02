import Navbar from "./Navbar";
import Footer from "./Footer";

// Importando todas as páginas para empilhá-las verticalmente
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Layout() {
  return (
    <>
      <Navbar />
      
      {/* Substituímos o <Outlet /> pela sequência de seções */}
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}