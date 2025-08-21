import React from "react";
import { ArrowRight } from "lucide-react";
import s1 from "../assets/img/service1.jpg";
import s2 from "../assets/img/service2.jpg";
import s3 from "../assets/img/service3.jpg";
import s4 from "../assets/img/service4.jpg";
import s5 from "../assets/img/service5.jpg";
import s6 from "../assets/img/service6.jpg";

const services = [
  {
    title: "Web Development",
    desc: "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    img: s1,
  },
  {
    title: "Custom Web Application",
    desc: "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    img: s2,
  },
  {
    title: "Landing Page Site",
    desc: "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    img: s3,
  },
  {
    title: "E-Commerce Development",
    desc: "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    img: s4,
  },
  {
    title: "SEO Optimization",
    desc: "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    img: s5,
  },
  {
    title: "Maintenance & Support",
    desc: "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    img: s6,
  },
];

export default function Services() {
  return (
    <section className="py-2 lg:py-16 bg-white mb-1 sm:mb-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-center sm:text-left">
          <p className="text-[#F26A33] text-xs sm:text-sm font-semibold">
            Our Services
          </p>

          <h3
            className="
              mt-2
              text-2xl
              sm:text-3xl
              md:text-[36px]
              lg:text-[40px]
              leading-tight
              font-semibold
              text-black
            "
          >
            What we can offer
            <br />
            today
          </h3>
        </div>

        {/* Grid */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((s, idx) => (
            <article
              key={s.title}
              className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-1 transition"
            >
              {/* header area: title + round icon */}
              <div className="p-6 pb-4 relative">
                <div className="flex items-start">
                  <h3 className="text-lg font-semibold text-gray-900 w-2/3">
                    {s.title}
                  </h3>

                  <div className="ml-auto">
                    <div className="w-9 h-9 rounded-full bg-[#F26A33] flex items-center justify-center text-white shadow">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-mutedText leading-6">
                  {s.desc}
                </p>
              </div>

              {/* image */}
              <div className="px-6 pb-6">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-36 md:h-40 lg:h-44 object-cover rounded-md"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
