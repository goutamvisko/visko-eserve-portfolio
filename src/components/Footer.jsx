import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronUp,
  Twitter 
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/img/logo.png";
import Inquiry from "./Inquiry";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <footer className="relative bg-slate-950 text-gray-300 overflow-hidden">
      {/* Subtle Animated Gradient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Let’s Talk
          </h2>

          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group w-24 h-24 flex items-center justify-center rounded-full 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                   shadow-lg hover:shadow-2xl text-white text-lg font-semibold 
                   transition-all"
          >
            <ArrowRight
              size={28}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.button>
        </motion.div>
        <Inquiry isOpen={open} onClose={() => setOpen(false)} />

        {/* Row with Logo, Input, Socials */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo + Email */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="flex items-center gap-6 w-full lg:w-auto"
          >
            <img src={logo} alt="logo" className="w-14 h-auto object-contain" />
            <div className="flex-1 min-w-[220px] max-w-md">
              <div className="flex items-center gap-3 border-b border-gray-600 pb-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full focus:outline-none placeholder:text-gray-400 text-gray-200"
                />
                <button className="flex items-center gap-2 text-orange-500 font-medium hover:text-white transition">
                  <span>Send</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="flex gap-4"
          >
            {[
              {
                Icon: Facebook,
                color: "hover:text-blue-500",
                link: "https://www.facebook.com/profile.php?id=61578248735784",
              },
              {
                Icon: Instagram,
                color: "hover:text-pink-400",
                link: "https://www.instagram.com/visko_e_serve/",
              },
              {
                Icon: Linkedin,
                color: "hover:text-blue-400",
                link: "https://www.linkedin.com/company/visko-eserve-private-limited",
              },
              {
                Icon: Twitter,
                color: "hover:text-blue-400",
                link: "https://x.com/visko_e_serve",
              },
            ].map(({ Icon, color, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className={`w-10 h-10 rounded-full bg-[#1e293b] border border-gray-600 flex items-center justify-center transition ${color}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.nav
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="mt-10 border-t border-gray-700 pt-6 flex justify-center gap-6 text-sm sm:text-base"
        >
          {["Home", "About", "Services", "Portfolio"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        {/* Footer bottom */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2025 Visko E-Serve Pvt. Ltd. All rights reserved.
        </div>

        {/* Floating Buttons */}
        {showButton && (
          <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
            <motion.button
              whileHover={{ scale: 1.15 }}
              onClick={scrollToTop}
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg text-white"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              onClick={scrollToBottom}
              className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-full shadow-lg text-white"
            >
              ↓
            </motion.button>
          </div>
        )}
      </div>
    </footer>
  );
}
