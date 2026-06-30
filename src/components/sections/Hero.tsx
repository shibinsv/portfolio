import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SUBTITLES = [
  "Senior Android Developer",
  "Jetpack Compose Expert",
  "Mobile Architect",
  "Flutter Developer"
];

export function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % SUBTITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Shibin <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
              Venugopalan
            </span>
          </h1>
          
          <div className="h-12 mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-white/80"
              >
                {SUBTITLES[currentSubtitle]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            Mobile App Developer with extensive experience in designing and developing native Android and cross-platform applications with Kotlin, Java, and Dart. Expertise in Jetpack Compose, Coroutines, Flutter, Firebase, Dialogflow CX, Stripe integration, and CI/CD pipelines.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollTo("projects")}
              className="h-14 px-8 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)]"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollTo("contact")}
              className="h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-colors flex items-center justify-center backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative perspective-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent blur-2xl rounded-2xl" />
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="text-sm text-purple-300 font-mono overflow-x-auto">
              <code>{`@Composable
fun HeroSection(modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .background(DeepSpace)
    ) {
        Text(
            text = "Building Serious Software",
            style = MaterialTheme.typography.h1,
            color = ElectricPurple
        )
        Spacer(modifier = Modifier.height(24.dp))
        Button(
            onClick = { launchProject() },
            colors = ButtonDefaults.buttonColors(
                backgroundColor = ElectricPurple
            )
        ) {
            Text("Execute")
        }
    }
}`}</code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-white/50 hover:text-white"
        onClick={() => scrollTo("about")}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
