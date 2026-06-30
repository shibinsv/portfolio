import React, { useState, useEffect } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-black tracking-tighter text-purple-500 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SV
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["about", "skills", "experience", "projects", "architecture", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-white/80 hover:text-purple-400 capitalize transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <a
          href="/Shibin_Venugopalan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-6 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
        >
          View Resume
        </a>
      </div>
    </header>
  );
}
