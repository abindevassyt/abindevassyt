import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Credentials from './components/Credentials';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Credentials />
        <Works />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
