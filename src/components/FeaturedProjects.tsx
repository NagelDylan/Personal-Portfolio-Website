import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Award, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import AcronymizeGif from "../../public/acronymize.gif";
import TanksGif from "../../public/tanks.gif";
import Flowsense from "../../public/flowsense.gif";
import styled from "styled-components";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  badge?: string;
  github?: string;
  demo?: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "Acronymize",
    description:
      "Modern word puzzle game where players guess words that form acronyms based on themes and clues.",
    fullDescription:
      "Acronymize is a modern web-based word puzzle game that combines Wordle-style feedback with acronym challenges. Players guess words that form acronyms based on given themes and clues, receiving real-time feedback through color-coded indicators (green for correct position, gold for correct word in wrong position). The game features three engaging modes: Level Up mode with structured progression and par scoring, Endless mode for high score competition, and Daily Puzzle challenges. Built with React 19 and TypeScript using Vite for the frontend, and Django with PostgreSQL for the backend, the platform includes Clerk authentication for secure user sessions and progress tracking. An integrated machine learning model using sentence transformers provides intelligent similarity scoring to show players how close their guesses are to the solution, creating an engaging and adaptive gaming experience.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Django",
      "PostgreSQL",
      "Clerk",
      "Neon",
    ],
    image: AcronymizeGif,
    github: "https://github.com/NagelDylan/Acronymize",
    demo: "https://www.acronymize.fun",
  },
  {
    title: "Tanks",
    description:
      "Recreation of the classic 'Tanks!' from Wii Play featuring advanced AI pathfinding and auto-aiming mechanics.",
    fullDescription:
      "Tanks is a meticulously crafted recreation of the classic 'Tanks!' game from Wii's 'Wii Play', blending nostalgia with modern game development techniques. Built entirely in C# using the MonoGame framework, the game features customized pathfinding algorithms where each enemy tank exhibits unique personality traits that influence their movement and strategy. The project tackles several sophisticated challenges including precise mathematical auto-aiming mechanisms for enemy tanks, comprehensive collision detection systems for bullets, walls, tanks, water and other elements, and efficient game state preservation that tracks stars, statistics, and unlocked levels across sessions. The development demonstrates strong object-oriented programming principles with clean architecture and design patterns, while the advanced AI pathfinding creates dynamic and engaging tactical gameplay. The game showcases technical proficiency in game physics, geometry calculations, and state management.",
    tags: ["C#", "MonoGame", ".NET", "Game Dev"],
    image: TanksGif,
    github: "https://github.com/NagelDylan/Tanks",
    video: "https://youtu.be/OBn8ILREHPM",
  },
  {
    title: "FlowSense",
    description:
      "Interactive reading tool with OpenAI GPT integration for context-aware definitions and inline notes.",
    fullDescription:
      "FlowSense is an innovative reading platform designed to make complex documents and technical reports more accessible. Built during Hack the 6ix 2024, the platform addresses the challenge of understanding foreign concepts in lengthy documents by providing instant, context-aware definitions using OpenAI's GPT API. Users can upload PDF files which are processed while preserving the original formatting, enabling inline notes and keyboard shortcuts for seamless interaction without breaking reading flow. The application features a clean tab-based interface for organizing multiple documents, with definitions that incorporate the surrounding text context for maximum relevance. Built with React for the frontend, Django for the backend API, and PostgreSQL for data persistence, FlowSense demonstrates effective integration of AI to enhance the reading and learning experience for technical content.",
    tags: ["React", "Django", "PostgreSQL", "OpenAI", "Python", "TypeScript"],
    image: Flowsense,
    badge: "🏆 Built at Hack the 6ix 2024",
    github: "https://github.com/NagelDylan/FlowSense",
    video: "https://www.youtube.com/watch?v=2c1xXcaIki8",
  },
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StyledCard onClick={() => setSelectedProject(project)}>
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                  {project.badge && (
                    <div className="badge-container">
                      <Badge className="bg-[#3369FF] text-white flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {project.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="content">
                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-[#2A2A2A] text-[#E0E0E0]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </StyledCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#1A1A1A] border border-white/10 rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        About This Project
                      </h4>
                      <p className="text-[#E0E0E0] leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <Badge key={tag} className="bg-[#3369FF] text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {selectedProject.github && (
                        <Button
                          asChild
                          className="bg-[#3369FF] hover:bg-[#2855CC] text-white flex items-center gap-2"
                        >
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {selectedProject.demo && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-[#3369FF] text-[#3369FF] hover:bg-[#3369FF] hover:text-white flex items-center gap-2"
                        >
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Play Demo
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {selectedProject.video && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-[#3369FF] text-[#3369FF] hover:bg-[#3369FF] hover:text-white flex items-center gap-2"
                        >
                          <a
                            href={selectedProject.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Watch Demo
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const StyledCard = styled.div`
  background-color: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 300ms;
  height: 100%;

  &:hover {
    border-color: rgba(51, 105, 255, 0.5);
    box-shadow: 0 10px 15px -3px rgba(51, 105, 255, 0.2),
      0 4px 6px -4px rgba(51, 105, 255, 0.2);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    height: 360px;

    img {
      aspect-ratio: 405/360;
      object-fit: cover;
    }
  }

  .badge-container {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .content {
    padding: 1.5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  .description {
    color: #e0e0e0;
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
