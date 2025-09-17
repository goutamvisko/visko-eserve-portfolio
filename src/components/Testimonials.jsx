import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial:
      "Working with this team was a game-changer. The project was delivered on time with exceptional quality. Highly recommend them!",
  },
  {
    id: 2,
    name: "David Miller",
    company: "Founder, StartupHub",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    testimonial:
      "They brought our vision to life with incredible design and flawless execution. Truly outstanding service.",
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Marketing Head, BrightAds",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    testimonial:
      "The professionalism and creativity of this team exceeded our expectations. Our brand presence skyrocketed.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-15" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-800"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Real feedback from our amazing clients.
        </motion.p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          loop={true}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide
              key={t.id}
              className="!flex !justify-center !items-center" // ✅ force swiper slide to center content
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg p-6 sm:p-8  max-w-4xl w-full flex flex-col items-center text-center"
              >
                {/* Client Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover shadow-md"
                />

                {/* Name & Company */}
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.company}</p>

                {/* Testimonial */}
                <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  "{t.testimonial}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
