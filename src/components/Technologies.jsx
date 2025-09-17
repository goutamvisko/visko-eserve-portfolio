// Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiPython,
  SiLaravel,
  SiPhp
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";


const skills = [
  { icon: <SiReact className="text-sky-500" />, name: "React" },
  { icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, name: "Next.js" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiMysql className="text-blue-700" />, name: "MySQL" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
  { icon: <SiPython className="text-blue-400" />, name: "Python" },
  { icon: <FaBrain className="text-pink-500" />, name: "AI / ML" },
  { icon: <SiPhp className="text-indigo-600" />, name: "PHP" },
  { icon: <SiLaravel className="text-red-600" />, name: "Laravel" },
  { icon: <MdOutlineSearch className="text-green-600" />, name: "SEO" },
];

export default function Technologies() {
  return (
    <section id="skills" className="py-15 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-12"
        >
          Technologies  <span className="text-orange-500"> We Use </span>
        </motion.h2>

        {/* Animated marquee row */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 py-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group"
              >
                <div className="text-5xl transition-transform transform group-hover:scale-125">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2nd row reverse scroll for cool effect */}
        <div className="relative w-full overflow-hidden mt-12">
          <motion.div
            className="flex gap-16 py-6"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group"
              >
                <div className="text-5xl transition-transform transform group-hover:scale-125">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
