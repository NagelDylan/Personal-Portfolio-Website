import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1A1A1A] border border-white/10 rounded-full hover:border-[#3369FF] hover:bg-[#3369FF]/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-[#E0E0E0] group-hover:text-[#3369FF] transition-colors duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1A1A1A] border border-white/10 rounded-full hover:border-[#3369FF] hover:bg-[#3369FF]/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-[#E0E0E0] group-hover:text-[#3369FF] transition-colors duration-300" />
            </a>
            <a
              href="mailto:dylan@example.com"
              className="p-3 bg-[#1A1A1A] border border-white/10 rounded-full hover:border-[#3369FF] hover:bg-[#3369FF]/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-[#E0E0E0] group-hover:text-[#3369FF] transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#9CA3AF]">© 2025 Dylan Nagel</p>
        </div>
      </div>
    </footer>
  );
}
