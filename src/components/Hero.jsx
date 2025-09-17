import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Inquiry from "./Inquiry";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import images
import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.png";
import hero4 from "../assets/img/hero4.jpg";

// --- Card Data ---
const cardData = [
  {
    id: 1,
    img: hero2,
    title: "Web Development",
    desc: "Building responsive and high-performance websites tailored to your business needs.",
  },
  {
    id: 2,
    img: hero3,
    title: "Custom Web Application",
    desc: "Developing scalable and secure web applications to streamline your operations.",
  },
  {
    id: 3,
    img: hero4,
    title: "E-Commerce Development",
    desc: "Creating feature-rich online stores to help you sell products effectively.",
  },
];

// --- Animation Variants for Text Content ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero({id}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-slate-50 pt-35 lg:pt-35 overflow-hidden" id={id}>
      {/* Main container with responsive padding and max-width */}
      <div className="max-w-10xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 sm:px-6 lg:px-20">
        {/* === LEFT & TOP CONTAINER (Text and Hero Image) === */}
        <div className="w-full lg:w-1/2 flex flex-col order-1">
          <motion.div
            className="order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.p
              variants={itemVariants}
              className="text-[#478097] text-base lg:text-lg font-bold tracking-wide"
            >
              BEST WEBSITE DEVELOPMENT COMPANY
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className=" font-black text-slate-900 text-4xl sm:text-5xl lg:text-7xl tracking-tighter mt-2"
            >
              We Are Ready to <br />
              <span> Build Your </span>
              <span className="text-[#478097]">Business</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-slate-600 font-medium text-base lg:text-lg leading-relaxed mt-5 max-w-xl"
            >
              We craft exceptional digital experiences that are not only
              visually stunning but also highly functional and user-friendly.
            </motion.p>
           
            <motion.div custom={5} variants={itemVariants} className="pt-6">
              <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg shadow-pink-500/30  transition-all transform hover:scale-105">
                Request a Call
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>
            <Inquiry isOpen={open} onClose={() => setOpen(false)} />
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="order-3 lg:order-2 mt-12 w-full hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          >
            <img
              src={hero1}
              alt="Main project"
              loading="lazy"
              className="rounded-2xl w-full h-auto max-h-[400px] object-cover shadow-2xl shadow-slate-900/10"
            />
          </motion.div>
        </div>

        {/* === RIGHT & MIDDLE CONTAINER (Swiper Cards) === */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-3 min-h-[400px] sm:min-h-[240px]">
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="w-[250px] h-[360px] md:w-[420px] md:h-[560px] lg:w-[560px] lg:h-[600px]"
              loop={true}
              autoplay={{
                delay: 2500, // ⏱ speed of change
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              cardsEffect={{
                perSlideOffset: 12,
                perSlideRotate: 5,
                slideShadows: false,
              }}
            >
              {cardData.map((card) => (
                <SwiperSlide
                  key={card.id}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{card.title}</h3>
                      <p className="text-base text-gray-200 mt-2 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
      <Inquiry isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
