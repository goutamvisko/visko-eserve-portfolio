import React from "react";
import { ArrowRight } from "lucide-react";
import p1 from "../assets/img/project1.png";
import p2 from "../assets/img/project2.png";
import p3 from "../assets/img/project3.png";
import p4 from "../assets/img/project4.png";

export default function Projects() {
  return (
    <section className="relative text-white overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0  bg-black clip-slant-top "></div>

      {/* Decorative stroke text */}
      <div className="projects-slab hidden md:block">
        <div className="whitespace-nowrap stroke-text translate-y-[80%]">
          Project ✶ Our Portfolio ✶ Our Client ✶ Project ✶ Our Portfolio ✶ Our
          Client ✶ Project
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-15 lg:mt-70 relative z-10">
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start justify-items-center mb-10 lg:mb-18">
          {/* Left column */}
          <div>
            <p className="text-[#F26A33] text-sm font-semibold mb-2 text-center sm:text-left">
              Our Projects
            </p>
            <h2 className="mb-6 text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] leading-tight font-semibold text-white text-center sm:text-left">
              Web Development services
              <br />
              aligned with your goals
            </h2>
            {/* Card 1 */}
            <article className="group relative overflow-hidden rounded-md mb-6 lg:mb-10  mx-auto transition-transform duration-500 hover:scale-105">
              <img
                src={p4}
                alt="Remark Job Portal"
                lazy="loading"
                className="w-full h-[220px] md:h-[240px] lg:h-[230px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-6 bottom-6 w-[200px] md:w-[220px]">
                <div className="bg-white text-black rounded-md px-4 py-3 shadow-md">
                  <div className="text-sm font-semibold">Remark Job Portal</div>
                  <div className="text-xs text-mutedText mt-1">
                    Web Development
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group relative overflow-hidden rounded-md mx-auto transition-transform duration-500 hover:scale-105">
              <img
                src={p1}
                alt="Visko Real Estate"
                lazy="loading"
                className="w-full h-[360px] md:h-[420px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-6 bottom-6 w-[200px] md:w-[220px]">
                <div className="bg-white text-black rounded-md px-4 py-3 shadow-md">
                  <div className="text-sm font-semibold">Visko Real Estate</div>
                  <div className="text-xs text-mutedText mt-1">
                    Web Development
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right column */}
          <div>
            {/* Card 2 */}
            <article className="group relative overflow-hidden rounded-md mb-6 lg:mb-10 mx-auto transition-transform duration-500 hover:scale-105">
              <img
                src={p2}
                alt="Fraction Reality"
                lazy="loading"
                className="w-full h-[360px] md:h-[420px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-6 bottom-6 w-[200px] md:w-[220px]">
                <div className="bg-white text-black rounded-md px-4 py-3 shadow-md">
                  <div className="text-sm font-semibold">Fraction Reality</div>
                  <div className="text-xs text-mutedText mt-1">
                    Web Development
                  </div>
                </div>
              </div>
            </article>

            {/* Card 4 */}
            <article className="group relative overflow-hidden rounded-md mx-auto transition-transform duration-500 hover:scale-105">
              <img
                src={p3}
                alt="Huming Bird"
                lazy="loading"
                className="w-full h-[220px] md:h-[240px] lg:h-[230px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-6 bottom-6 w-[200px] md:w-[220px]">
                <div className="bg-white text-black rounded-md px-4 py-3 shadow-md">
                  <div className="text-sm font-semibold">Huming Bird</div>
                  <div className="text-xs text-mutedText mt-1">
                    Web Development
                  </div>
                </div>
              </div>
            </article>

            {/* View all button */}
            <div className="mt-8 lg:mt-20 flex justify-center sm:justify-end">
              <button className="inline-flex items-center gap-2 text-[#F26A33] hover:underline font-semibold cursor-pointer transition-all duration-300 hover:scale-105">
                View All Project
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//-------------------------
