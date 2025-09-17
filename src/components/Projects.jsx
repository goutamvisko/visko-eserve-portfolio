import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import p1 from "../assets/img/project1.png";
import p2 from "../assets/img/project2.png";
import p3 from "../assets/img/project3.png";
import p4 from "../assets/img/project4.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const projectData = [
  {
    title: "Remark Job Portal",
    category: "Web Application",
    description:
      "A comprehensive job portal connecting employers and candidates with advanced search, tracking & profiles.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    img: p4,
  },
  {
    title: "Visko Real Estate",
    category: "Corporate Website",
    description:
      "An elegant website for a real estate agency with property listings, filters & high-res imagery.",
    tech: ["Next.js", "Sanity CMS", "Framer Motion"],
    img: p1,
  },
  {
    title: "Fraction Reality",
    category: "E-Commerce Platform",
    description:
      "Fractional ownership of real estate assets, with secure payments & personal dashboards.",
    tech: ["React", "Firebase", "Stripe API"],
    img: p2,
  },
  {
    title: "Humming Bird",
    category: "Marketing Website",
    description:
      "A vibrant marketing site with strong visuals, animations & lead capture system.",
    tech: ["Gatsby", "GraphQL", "Styled Components"],
    img: p3,
  },
];

export default function Projects({id}) {
  return (
    <section className="relative w-full bg-slate-950 py-15 overflow-hidden" id={id}>
      {/* Background Title */}
      <motion.h2
        className="absolute top-1/2 left-0 w-full text-center text-[9vw] lg:text-[110px] font-extrabold text-slate-800/30 tracking-tight pointer-events-none select-none"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        ✦ PORTFOLIO ✦
      </motion.h2>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-12 lg:mb-16 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            custom={1}
            variants={fadeInUp}
            className="text-orange-500 font-bold uppercase tracking-wide text-sm text-center"
          >
            Featured Projects
          </motion.p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-black tracking-tight mt-3">
            Designing Experiences, <br /> Not Just Websites
          </h2>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] sm:h-[550px] rounded-2xl overflow-hidden group">
                {/* Background Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Glass Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-12 backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg w-[90%] lg:w-[50%] text-center lg:text-left"
                >
                  <p className="text-orange-400 font-semibold uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-200 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-800/70 text-orange-500 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div custom={5} variants={fadeInUp} className="pt-6">
                    <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  shadow-pink-500/30 hover:shadow-xl transition-all transform hover:scale-105">
                      View Project
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Nav */}
          <div className="absolute inset-x-0 bottom-5 flex justify-center gap-6 z-20">
            <div className="swiper-button-prev-custom cursor-pointer p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 transition-colors">
              <ArrowLeft className="text-white" size={22} />
            </div>
            <div className="swiper-button-next-custom cursor-pointer p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 transition-colors">
              <ArrowRight className="text-white" size={22} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
