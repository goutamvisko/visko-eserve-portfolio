import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Award, Users, TrendingUp } from "lucide-react";
import aboutImg from "../assets/img/about.jpg"; 
import Inquiry from "./Inquiry";
// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function AboutUs({id}) {
  const [open, setOpen] = useState(false);
  const features = [
    "Ease of Scalability",
    "Expertise and Experience",
    "Full Flexibility",
    "Instant Impact",
    "Time Zone Aligned",
    "Proactive Support",
  ];

  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: TrendingUp, value: "200+", label: "Projects Delivered" },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 py-15 overflow-hidden" id={id}>
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10" />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT COLUMN - Image Collage */}
          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-10/12 sm:w-4/5 lg:w-full">
              {/* Main Image */}
              <img
                src={aboutImg}
                alt="Team working"
                className="rounded-2xl object-cover w-full h-[420px] shadow-2xl"
              />

              {/* Overlapping small image */}
              {/* <img
               src={aboutImg}
                alt="Collaboration"
                className="absolute -bottom-10 -left-8 w-40 sm:w-52 rounded-xl shadow-xl border-4 border-white"
              /> */}

              {/* Floating Stat Badges */}
              <div className="absolute -top-8 -right-10 space-y-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-5 py-4 flex items-center gap-3 border border-slate-100"
                  >
                    <div className="p-2 rounded-full bg-orange-500 text-white">
                      <s.icon size={20} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">{s.value}</p>
                      <p className="text-sm font-medium text-slate-600">
                        {s.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Content */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 lg:pl-8"
          >
            <motion.p
              custom={1}
              variants={fadeInUp}
              className="text-orange-500 font-bold uppercase tracking-wide text-sm text-center lg:text-left"
            >
              About Our Company
            </motion.p>

            <motion.h2
              custom={2}
              variants={fadeInUp}
              className="font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-4xl leading-tight tracking-tight text-center lg:text-left"
            >
              Building Digital Experiences <br /> That Drive Growth 
            </motion.h2>

            <motion.p
              custom={3}
              variants={fadeInUp}
              className="text-slate-600 font-medium text-lg leading-relaxed text-center lg:text-left"
            >
              We go beyond websites. Our mission is to craft platforms that
              represent your brand, engage your audience, and generate
              measurable impact. With a mix of creativity, strategy, and
              technology — we turn ideas into growth stories.
            </motion.p>

            {/* Features */}
            <motion.div
              custom={4}
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-4"
            >
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div custom={5} variants={fadeInUp} className="pt-6">
              <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg shadow-pink-500/30 transition-all transform hover:scale-105">
                Free Consultation
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Inquiry isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
