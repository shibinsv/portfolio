import React from "react";
import { motion } from "framer-motion";

export function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Apps Shipped", value: "10+" },
    { label: "Production Stores", value: "2" },
    { label: "Architectures", value: "3+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 leading-relaxed space-y-6"
          >
            <p>
              I am a Senior Android Developer with over 5 years of professional experience crafting high-performance native and cross-platform applications. My journey spans from building complex IoT integrations to architecting scalable e-commerce platforms.
            </p>
            <p>
              I specialize in <strong className="text-white">Jetpack Compose</strong> and modern Android architecture. I've successfully delivered applications to both the Play Store and App Store, integrating advanced features like AI conversational agents (Dialogflow CX), real-time databases, and robust payment pipelines via Stripe and Google Play Billing.
            </p>
            <p>
              Whether it's implementing Clean Architecture, optimizing UI performance, or leading technical initiatives, I build software that scales gracefully and delivers exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center group hover:border-purple-500/50 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl md:text-5xl font-black text-white mb-2 relative z-10">
                  {stat.value}
                </div>
                <div className="text-sm text-purple-300 font-medium relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
