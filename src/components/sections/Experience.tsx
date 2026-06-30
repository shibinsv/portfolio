import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "D4 Insight",
    location: "Chennai",
    role: "Software Developer",
    period: "Oct 2023 – Present",
    points: [
      "Built comprehensive e-commerce Android app (Kutlr) from scratch using Jetpack Compose",
      "Integrated Dialogflow CX for AI-driven user interactions + Firebase real-time DB",
      "Implemented Stripe payment integration",
      "Contributed to server-driven UI merchant configuration app"
    ],
    tech: ["Jetpack Compose", "Dialogflow CX", "Firebase", "Stripe", "Kotlin"]
  },
  {
    company: "Calibraint Technologies",
    location: "Chennai",
    role: "Associate Software Developer",
    period: "July 2021 – August 2023",
    points: [
      "Developed native Android IoT air quality monitoring app with Tuya SDK (Play Store rollout)",
      "Built asset management app with Jetpack Compose + MVVM",
      "Improved English learning app (MVVM architecture)",
      "Integrated Google Play Subscriptions into dental job portal",
      "Built inventory management system using MVP + CodeMagic CI/CD",
      "Developed Flutter e-commerce app for inventory scanning (Provider state management)",
      "Deployed Flutter web app for ophthalmologists (Alcon — IOL outcomes visualization)",
      "Contributed to Flutter network management app",
      "Created Flutter time-tracking app with Bloc"
    ],
    tech: ["Jetpack Compose", "Flutter", "MVVM", "MVP", "Tuya SDK", "Google Play Billing", "Room", "Retrofit", "Bloc", "Provider"]
  },
  {
    company: "Tripalive Technologies",
    location: "Chennai",
    role: "Android Developer (Intern)",
    period: "Dec 2020 – May 2021",
    points: [
      "3-month internship + 3 months professional work",
      "Social media app development (Pixalive platform)"
    ],
    tech: ["Android", "Kotlin", "Social Media"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Career Journey</h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 via-purple-600/50 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 via-purple-600/50 to-transparent md:hidden" />

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-12 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(124,58,237,0.8)] -translate-x-1/2 z-10" />

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-[45%] pl-14 md:pl-0"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-lg text-white/80 font-medium mb-6">
                    {exp.company} <span className="text-white/40">• {exp.location}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start">
                        <span className="mr-2 text-purple-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs text-white/50 bg-black/50 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
