import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectCarousel } from './components/ProjectCarousel';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <ProjectCarousel />
      <Experience />
      <TechStack />
      <About />
      <Contact />
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
