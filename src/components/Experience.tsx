import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cartaLogo from "../../public/carta.png";
import empathiaLogo from "../../public/empathia_icon.webp";
import whitbyMedicalLogo from "../../public/whitby-medical-logo.png";

interface ExperienceItem {
  logo: string;
  date: string;
  role: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    logo: cartaLogo,
    date: "Sep. 2025 – Present",
    role: "Software Development Intern",
    company: "Carta",
    description:
      "Engineered an AI email routing service using Python and Django, projected to automate 15% of 1.5 million annual emails, significantly reducing manual processing time. Implemented machine learning models to classify and route support inquiries to appropriate departments. Collaborated with cross-functional teams to integrate the service with existing infrastructure, ensuring seamless deployment and high reliability.",
  },
  {
    logo: empathiaLogo,
    date: "Jan. 2025 – May 2025",
    role: "Full Stack Developer",
    company: "Empathia.ai",
    description:
      "Contributed to a full-stack RAG (Retrieval-Augmented Generation) system using Python and TypeScript that leveraged user notes to boost AI smart edit accuracy by 30%. Developed robust API endpoints and optimized database queries for improved performance. Implemented comprehensive testing strategies to ensure system reliability and data integrity across multiple deployment environments.",
  },
  {
    logo: empathiaLogo,
    date: "May 2024 – Jan. 2025",
    role: "Website Developer",
    company: "Empathia.ai",
    description:
      "Independently drove the design, development, and deployment of Empathia.ai's website using React and Node.js. Created a modern, responsive user interface with smooth animations and optimal performance. Implemented SEO best practices and analytics tracking to monitor user engagement. Successfully launched the website on schedule, establishing the company's digital presence.",
  },
  {
    logo: whitbyMedicalLogo,
    date: "Aug. 2023 – Jan. 2024",
    role: "Website Developer",
    company: "Whitby Medical",
    description:
      "Led the complete redesign and development of Whitby Medical Clinic's website, collaborating with clinic staff to create a modern, patient-focused digital platform. Built a fully responsive site using vanilla JavaScript, HTML, and CSS with 10+ interactive components and intuitive cross-device navigation. Implemented CloudFlare CDN optimization and SEO best practices, achieving a 55% increase in user engagement.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          My Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#3369FF]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Logo */}
                <div className="absolute left-0 w-16 h-16 rounded-full overflow-hidden border-4 border-[#3369FF] bg-[#1A1A1A]">
                  <ImageWithFallback
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 hover:border-[#3369FF]/50 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-white">{exp.role}</h3>
                    <span className="text-[#3369FF]">{exp.date}</span>
                  </div>
                  <h4 className="text-[#E0E0E0] mb-3">{exp.company}</h4>
                  <p className="text-[#E0E0E0]">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
