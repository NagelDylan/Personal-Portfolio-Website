import { useState, useRef, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface SmallProject {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const otherProjects: SmallProject[] = [
  {
    title: "Ice Cold Butter Beer",
    description:
      "Retro arcade game recreation with six unique modes and advanced ball physics simulation.",
    tags: ["C#", "MonoGame", "Physics"],
    github: "https://github.com/NagelDylan/IceColdButterBeer",
  },
  {
    title: "SpotifAI",
    description:
      "AI-powered Spotify integration tool for enhanced music discovery and playlist management.",
    tags: ["JavaScript", "Spotify API", "AI"],
    github: "https://github.com/NagelDylan/SpotifAI",
  },
  {
    title: "Minecraft Mayhem",
    description:
      "Galaga-style arcade shooter blended with Minecraft enemies and pixelated aesthetics.",
    tags: ["C#", "MonoGame", "Game Dev"],
    github: "https://github.com/NagelDylan/Minecraft-Mayhem",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern portfolio showcasing projects with responsive design and smooth animations.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/NagelDylan/Personal-Portfolio-Website",
  },
  {
    title: "Recipe Finder",
    description:
      "Search recipes based on ingredients with dietary filtering and nutritional preferences.",
    tags: ["HTML", "JavaScript", "API"],
    github: "https://github.com/NagelDylan/RecipeFinder",
  },
  {
    title: "Sniper Assassin",
    description:
      "Tactical shooter game through sniper scope with UAV system for strategic planning.",
    tags: ["C#", "MonoGame", "Game Dev"],
    github: "https://github.com/NagelDylan/Sniper-Assassin",
  },
  {
    title: "Wordle Clone",
    description:
      "Recreation of the popular word puzzle game with local statistics tracking.",
    tags: ["C#", "MonoGame", "Game Dev"],
    github: "https://github.com/NagelDylan/Wordle",
  },
  {
    title: "Whitby Medical Clinic",
    description:
      "Professional medical clinic website with responsive design achieving 55% improved user engagement.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/NagelDylan/MedicalClinic",
  },
  {
    title: "SpeakType",
    description:
      "Finally, a genuinely good voice to text system with real-time transcription.",
    tags: ["Python", "JavaScript", "Speech API"],
    github: "https://github.com/NagelDylan/SpeakType",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game with clean UI and multiplayer support.",
    tags: ["C#", "MonoGame", "Game Dev"],
    github: "https://github.com/NagelDylan/TicTacToe",
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, otherProjects.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          More of My Work
        </motion.h2>
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#3369FF] hover:bg-[#2855CC] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#3369FF] hover:bg-[#2855CC] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-12" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${
                      ((itemsPerView - 1) * 24) / itemsPerView
                    }px)`,
                  }}
                >
                  <Card
                    className="bg-[#1A1A1A] border-white/10 p-6 cursor-pointer group hover:border-[#3369FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3369FF]/20 h-full"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-[#E0E0E0] mb-4 min-h-[3rem]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#3369FF] w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
