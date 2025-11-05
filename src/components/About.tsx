import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square border-4 border-[#3369FF]/30 hover:border-[#3369FF] transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjIyNjU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dylan Nagel"
                className="w-full h-full object-cover"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3369FF]/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3369FF]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3369FF]/10 rounded-full blur-2xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-[#3369FF]">A bit more about me.</h3>
            <p className="text-[#E0E0E0]">
              I'm a passionate problem-solver currently studying Computer Science at the University
              of Waterloo. Driven by curiosity, I love diving deep into the full stack, from
              building intuitive React frontends to engineering scalable and efficient backend
              systems.
            </p>
            <p className="text-[#E0E0E0]">
              My approach to software development is rooted in understanding the bigger picture
              while obsessing over the details. I believe great software is born from the
              intersection of elegant code, thoughtful design, and real-world problem solving.
              Whether it's optimizing database queries, implementing AI-powered features, or
              crafting pixel-perfect interfaces, I bring the same level of dedication to every
              project.
            </p>
            <p className="text-[#E0E0E0]">
              When I'm not at my keyboard, you'll find me exploring new technologies, contributing
              to open source projects, or brainstorming the next big idea. I'm always eager to
              learn, collaborate, and push the boundaries of what's possible with code.
            </p>
            <Button
              asChild
              className="bg-[#3369FF] hover:bg-[#2855CC] text-white px-8 py-6 shadow-lg shadow-[#3369FF]/30 transition-all duration-300 hover:shadow-[#3369FF]/50 hover:scale-105 flex items-center gap-2"
            >
              <a href="/resume.pdf" download="Dylan_Nagel_Resume.pdf">
                <Download className="w-5 h-5" />
                Download My Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
