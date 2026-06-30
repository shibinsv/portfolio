import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "D4 Insight",
    location: "Chennai",
    role: "Software Developer",
    period: "Oct 2023 – Present",
    current: true,
    points: [
      "Built comprehensive e-commerce Android app (Kutlr) from scratch using Jetpack Compose",
      "Integrated Dialogflow CX for AI-driven user interactions + Firebase real-time DB",
      "Implemented Stripe payment integration",
      "Contributed to server-driven UI merchant configuration app",
    ],
    tech: ["Jetpack Compose", "Dialogflow CX", "Firebase", "Stripe", "Kotlin"],
  },
  {
    company: "Calibraint Technologies",
    location: "Chennai",
    role: "Associate Software Developer",
    period: "July 2021 – August 2023",
    current: false,
    points: [
      "Developed native Android IoT air quality monitoring app with Tuya SDK (Play Store rollout)",
      "Built asset management app with Jetpack Compose + MVVM",
      "Integrated Google Play Subscriptions into dental job portal",
      "Built inventory management system using MVP + CodeMagic CI/CD",
      "Deployed Flutter web app for ophthalmologists (Alcon — IOL outcomes visualization)",
    ],
    tech: ["Jetpack Compose", "Flutter", "MVVM", "MVP", "Tuya SDK", "Google Play Billing", "Bloc", "Provider"],
  },
  {
    company: "Tripalive Technologies",
    location: "Chennai",
    role: "Android Developer (Intern)",
    period: "Dec 2020 – May 2021",
    current: false,
    points: [
      "6-month engagement: 3-month internship + 3 months professional work",
      "Social media app development for the Pixalive platform",
    ],
    tech: ["Android", "Kotlin", "Social Media"],
  },
];

function TimelineDot({ current, inView }: { current: boolean; inView: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {current && (
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-purple-500/30"
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.div
        className={`w-5 h-5 rounded-full border-2 z-10 ${
          current
            ? "bg-purple-500 border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.8)]"
            : "bg-gray-900 border-purple-600"
        }`}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
      />
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: (typeof EXPERIENCES)[0];
  index: number;
  inView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-5">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
            {exp.role}
          </h3>
          {exp.current && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            {exp.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            {exp.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            {exp.period}
          </span>
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-2.5 mb-5">
        {exp.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-white/65">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-purple-300/80 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full group-hover:border-purple-500/40 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-x-6 md:gap-x-10 mb-12 md:mb-16 items-start">
      {/* Left side */}
      <div className={isLeft ? "flex justify-end" : ""}>
        {isLeft ? (
          <div className="w-full max-w-[420px]">
            <ExperienceCard exp={exp} index={index} inView={inView} />
          </div>
        ) : (
          /* Period label on right side's left column */
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex justify-end items-start pt-1"
          >
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <TimelineDot current={exp.current} inView={inView} />
      </div>

      {/* Right side */}
      <div className={!isLeft ? "flex justify-start" : ""}>
        {!isLeft ? (
          <div className="w-full max-w-[420px]">
            <ExperienceCard exp={exp} index={index} inView={inView} />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function MobileTimelineItem({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="relative pl-10 mb-10">
      <div className="absolute left-0 top-1">
        <TimelineDot current={exp.current} inView={inView} />
      </div>
      <ExperienceCard exp={exp} index={index} inView={inView} />
    </div>
  );
}

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Career Journey
          </h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 overflow-hidden"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-purple-600/60 to-transparent"
              initial={{ height: "0%" }}
              animate={lineInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
          </div>

          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* Mobile timeline — single column with left rail */}
        <div className="md:hidden relative max-w-xl mx-auto">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-600/50 to-transparent" />
          {EXPERIENCES.map((exp, index) => (
            <MobileTimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
