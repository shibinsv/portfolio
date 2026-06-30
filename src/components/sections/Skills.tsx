import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Layers, Bot, Wrench, Cloud } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Android Core",
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    skills: ["Jetpack Compose", "XML Layouts", "Coroutines", "LiveData", "ViewModel", "Navigation Component"]
  },
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    skills: ["Kotlin", "Java", "Dart", "Flutter"]
  },
  {
    title: "Architecture Patterns",
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    skills: ["MVVM", "MVP", "MVC", "Clean Architecture"]
  },
  {
    title: "AI & Integrations",
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    skills: ["Gemini API", "Dialogflow CX", "Stripe", "Google Play Billing"]
  },
  {
    title: "Tools & Libraries",
    icon: <Wrench className="w-6 h-6 text-purple-400" />,
    skills: ["Retrofit", "Room", "Tuya SDK", "Provider", "Bloc", "CodeMagic"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
    skills: ["Firebase", "Firebase Hosting", "CI/CD", "Git", "Agile/Scrum"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
