import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  )
}

export default App