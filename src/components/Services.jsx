import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layers,
  Megaphone,
  Search,
  ShoppingCart,
  ShieldCheck,
} from "lucide-react";
import s1 from "../assets/img/service1.jpg";
import s2 from "../assets/img/service2.jpg";
import s3 from "../assets/img/service3.jpg";
import s4 from "../assets/img/service4.jpg";
import s5 from "../assets/img/service5.jpg";
import s6 from "../assets/img/service6.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

// --- Service Data with Icons ---
const services = [
  {
    title: "Web Development",
    desc: "We build high-performance, scalable, and secure web applications tailored to your business needs.",
    img: s1,
    icon: <Code />,
  },
  {
    title: "Custom Web Application",
    desc: "From complex enterprise platforms to dynamic single-page applications, we bring your ideas to life.",
    img: s2,
    icon: <Layers />,
  },
  {
    title: "E-Commerce Development",
    desc: "Create powerful online stores with seamless user experiences and secure payment gateways.",
    img: s4,
    icon: <ShoppingCart />,
  },
  {
    title: "SEO Optimization",
    desc: "Improve your search engine rankings, increase organic traffic, and get found by your target audience.",
    img: s5,
    icon: <Search />,
  },
  {
    title: "Landing Page Site",
    desc: "Capture leads and drive conversions with beautifully designed, high-impact landing pages.",
    img: s3,
    icon: <Megaphone />,
  },
  {
    title: "Maintenance & Support",
    desc: "Ensure your website runs smoothly with our reliable maintenance, updates, and proactive support.",
    img: s6,
    icon: <ShieldCheck />,
  },
];

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services({ id }) {
  return (
    <section className="w-full bg-white py-15  overflow-hidden" id={id}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* === Section Header === */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <motion.p
            custom={1}
            variants={fadeInUp}
            className="text-orange-500 font-bold uppercase tracking-wide text-sm text-center"
          >
            Our Services
          </motion.p>
          <h2 className="m-0 font-black text-slate-900 text-3xl sm:text-4xl lg:text-4xl tracking-tighter mt-2">
            What We Can Offer <br className="hidden sm:inline" /> Today
          </h2>
        </motion.div>

        {/* === Services Grid === */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative"
              variants={cardVariants}
            >
              <div className="relative bg-slate-50 rounded-2xl overflow-hidden h-full border border-transparent group-hover:border-cyan-500/50 transition-all duration-300">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Icon Circle */}
                <div className="absolute top-48 right-6 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>

                {/* Text Content */}
                <div className="p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-600 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                  {/* <div className="mt-6">
                    <span className="inline-flex items-center gap-2 font-semibold text-orange-500">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
