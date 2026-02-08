import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Credentials from './components/Credentials';
import CustomCursor from './components/CustomCursor';
import BackgroundBlobs from './components/BackgroundBlobs';
import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-white cursor-none relative">
        {/* Noise Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <BackgroundBlobs />
        <CustomCursor />
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
    </ReactLenis>
  );
}

export default App;
