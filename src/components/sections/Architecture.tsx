import React from "react";
import { motion } from "framer-motion";
import { Database, LayoutTemplate, BoxSelect, Cpu, Server, Network } from "lucide-react";

const ARCHITECTURES = [
  {
    title: "MVVM / MVP / MVC",
    desc: "Extensive implementation of presentation patterns across 10+ projects.",
    icon: <LayoutTemplate className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Clean Architecture",
    desc: "Separation of concerns using domain, data, and presentation layers.",
    icon: <BoxSelect className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Server-Driven UI",
    desc: "Dynamic interface generation via backend configuration payloads.",
    icon: <Server className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Offline-First",
    desc: "Robust local caching strategies using Room database.",
    icon: <Database className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Dependency Injection",
    desc: "Scalable component wiring for testable codebases.",
    icon: <Network className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Modular State (Flutter)",
    desc: "Predictable state mutation flows using Provider and Bloc.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />
  }
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineering Excellence</h2>
            <div className="w-20 h-1 bg-purple-600 rounded-full mb-8" />
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Writing code is easy. Designing systems that scale, adapt to changing requirements, and remain maintainable for years requires discipline. I apply proven architectural patterns to ensure the products I build are robust from the inside out.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {ARCHITECTURES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center relative h-[600px]"
          >
            {/* Abstract Architecture Graphic */}
            <div className="relative w-full max-w-md aspect-square perspective-1000">
              <motion.div 
                animate={{ rotateY: [0, 10, 0], rotateX: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full relative transform-style-3d"
              >
                {/* Presentation Layer */}
                <div className="absolute top-0 left-10 right-10 h-32 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-z-20">
                  <span className="text-white/80 font-mono font-bold tracking-widest uppercase">Presentation UI</span>
                </div>
                
                {/* Domain Layer */}
                <div className="absolute top-40 left-0 right-0 h-32 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transform translate-z-10">
                  <span className="text-white/60 font-mono font-bold tracking-widest uppercase">Domain Logic</span>
                </div>

                {/* Data Layer */}
                <div className="absolute top-80 left-10 right-10 h-32 bg-white/5 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-center transform -translate-z-10">
                  <span className="text-white/40 font-mono font-bold tracking-widest uppercase">Data & APIs</span>
                </div>

                {/* Connecting Lines */}
                <div className="absolute top-32 left-1/4 w-[1px] h-8 bg-purple-500/50" />
                <div className="absolute top-32 right-1/4 w-[1px] h-8 bg-purple-500/50" />
                <div className="absolute top-[288px] left-1/3 w-[1px] h-8 bg-white/20" />
                <div className="absolute top-[288px] right-1/3 w-[1px] h-8 bg-white/20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
