import React from "react";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-black tracking-tighter text-purple-500">SV</span>
          <p className="text-sm text-white/60">
            Built by Shibin Venugopalan &copy; {currentYear}
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/shibinsv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-purple-600 hover:text-white transition-colors border border-white/10">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shibin-v/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-purple-600 hover:text-white transition-colors border border-white/10">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://medium.com/@shibin_sv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-purple-600 hover:text-white transition-colors border border-white/10">
            <BookOpen className="w-5 h-5" />
          </a>
          <a href="mailto:shibinvenugopalan@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-purple-600 hover:text-white transition-colors border border-white/10">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
