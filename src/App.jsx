import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"
import Projects from "./sections/Projects"
import Awards from "./sections/Awards"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App