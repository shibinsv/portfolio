import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, BookOpen, AlertCircle } from "lucide-react";

const FORMSPREE_URL =
  (import.meta.env.VITE_FORMSPREE_URL as string | undefined) ||
  "https://formspree.io/f/xykqwvzz";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setErrorMsg(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                Something
              </span>
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-md">
              Whether you need a senior developer to architect your next mobile app or want to discuss a new opportunity, my inbox is always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Email</div>
                  <a href="mailto:shibinvenugopalan@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                    shibinvenugopalan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Phone</div>
                  <a href="tel:+919042328397" className="text-white font-medium hover:text-purple-400 transition-colors">
                    +91 9042328397
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Location</div>
                  <div className="text-white font-medium">Chennai, India</div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com/in/shibin-v/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/shibinsv" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@shibin_sv" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all">
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              {status === "success" ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/60">I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-white/60 mb-2">Name</label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      data-testid="input-name"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="reply_to" className="block text-sm font-medium text-white/60 mb-2">Email</label>
                    <input
                      id="reply_to"
                      name="email"
                      type="email"
                      required
                      data-testid="input-email"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      data-testid="input-message"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    data-testid="button-submit"
                    className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
