import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;