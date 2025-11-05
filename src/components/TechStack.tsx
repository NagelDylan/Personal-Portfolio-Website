import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Terminal,
  FileCode,
  Layers,
  Server,
} from 'lucide-react';

const techStack = {
  Languages: [
    'Java',
    'Python',
    'C',
    'C++',
    'C#',
    'JavaScript',
    'TypeScript',
    'SQL',
    'Bash',
  ],
  'Frameworks & Libraries': [
    'React',
    'Node.js',
    'Express',
    'Django',
    'Flask',
    'FastAPI',
    '.NET',
    'MonoGame',
  ],
  'Cloud & Data': [
    'AWS (S3)',
    'GCP',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Kafka',
  ],
  'Tools & Workflow': [
    'Docker',
    'Kubernetes',
    'n8n',
    'Git',
    'Jenkins',
    'Figma',
    'Cloudflare',
  ],
};

const categoryIcons: Record<string, any> = {
  Languages: Terminal,
  'Frameworks & Libraries': Layers,
  'Cloud & Data': Database,
  'Tools & Workflow': Wrench,
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          My Tech Stack
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, items], categoryIndex) => {
            const Icon = categoryIcons[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 hover:border-[#3369FF]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#3369FF]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#3369FF]" />
                  </div>
                  <h3 className="text-white">{category}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[#E0E0E0] group hover:text-[#3369FF] transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#3369FF] rounded-full group-hover:scale-125 transition-transform duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
