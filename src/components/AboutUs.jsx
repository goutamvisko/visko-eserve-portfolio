import React from "react";
import { ArrowRight, Check } from "lucide-react";
import heroImg from "../assets/img/about.jpg";

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#4780970D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT column */}
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-[#e55b1d] text-sm sm:text-base font-semibold">
              About Company
            </p>

            <h2 className=" text-2xl
              sm:text-3xl
              md:text-[36px]
              lg:text-[40px] leading-tight font-semibold text-black">
              Websites that tell your <br className="hidden sm:block" />
              <span className="whitespace-nowrap">brand’s story</span>
            </h2>

            {/* image container */}
            <div className="relative mt-6 flex justify-center lg:justify-start">
              <img
                src={heroImg}
                alt="Team working"
                loading="lazy"
                className="w-[85%] sm:w-[70%] lg:w-[90%] rounded-[10px] object-cover 
          h-[300px] sm:h-[380px] lg:h-[350px]"
              />

              {/* circular badge */}
              <div
                className="
            absolute 
            bottom-[-5%] left-[25%] sm:left-[20%]
            lg:bottom-35 lg:right-[-60%]
            flex items-center justify-center
          "
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#e55b1d] flex items-center justify-center text-white shadow-lg border-4 border-white">
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT column */}
          <div className="space-y-6">
            <p className="text-sm sm:text-base  leading-6 text-mutedText">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <p className="text-sm sm:text-base leading-6 text-mutedText">
              Totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
              architecto beatae vitae dicta sunt explicabo, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt.
            </p>

            {/* features: two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                "Ease of Scalability",
                "Expertise and Experience",
                "Full Flexibility",
                "Instant Impact",
                "Time Zone Aligned",
                "Proactive Support",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#e55b1d] text-white text-xs">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button className="inline-flex items-center gap-3 bg-[#e55b1d] text-white px-5 py-3 rounded-full font-semibold shadow">
                Free Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
