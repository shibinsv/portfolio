import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "Kutlr",
    description: "E-commerce Android app for lifestyle brand with AI conversational agent.",
    tech: ["Jetpack Compose", "Dialogflow CX", "Firebase", "Stripe"],
    category: "Android / E-commerce",
    type: "android"
  },
  {
    name: "iQi",
    description: "IoT air quality monitoring app. Deployed to Play Store.",
    tech: ["Android", "Tuya SDK", "Kotlin"],
    category: "Android / IoT",
    type: "android"
  },
  {
    name: "Alcon",
    description: "Educational web app for ophthalmologists — IOL outcome visualization using real-life scenarios.",
    tech: ["Flutter Web", "Dart"],
    category: "Flutter / Healthcare",
    type: "flutter"
  },
  {
    name: "Maxis Assets",
    description: "Asset management tool for organizations with clean architecture.",
    tech: ["Jetpack Compose", "MVVM", "Kotlin"],
    category: "Android / Enterprise",
    type: "android"
  },
  {
    name: "CUSP",
    description: "Subscription-based dental job portal.",
    tech: ["Android", "Google Play Billing", "Kotlin"],
    category: "Android / SaaS",
    type: "android"
  },
  {
    name: "Omnicounts",
    description: "Inventory tracking system with continuous integration pipeline.",
    tech: ["Android", "MVP", "CodeMagic", "Kotlin"],
    category: "Android / Enterprise",
    type: "android"
  },
  {
    name: "AI-Chatbot",
    description: "AI conversation assistant integration for mobile platforms.",
    tech: ["Android", "Dialogflow CX", "Kotlin"],
    category: "Android / AI",
    type: "android"
  },
  {
    name: "WSE",
    description: "English learning app with scalable component architecture.",
    tech: ["Android", "MVVM", "Kotlin"],
    category: "Android / EdTech",
    type: "android"
  },
  {
    name: "Outlet Studio",
    description: "Scalable e-commerce platform.",
    tech: ["Android", "Kotlin"],
    category: "Android / E-commerce",
    type: "android"
  },
  {
    name: "Tengo",
    description: "Network management app for internet control and support tickets.",
    tech: ["Flutter", "Dart"],
    category: "Flutter / Network",
    type: "flutter"
  },
  {
    name: "Pixalive",
    description: "Dynamic social media platform.",
    tech: ["Android", "Kotlin"],
    category: "Android / Social",
    type: "android"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col h-full group"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  project.type === 'android' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {project.category}
                </span>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-purple-400 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-white/60 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium text-white/40 bg-black/40 px-2 py-1 rounded">
                    {t}
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
