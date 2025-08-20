import React from "react";
import { Link } from "react-router-dom";
import CardSwap, { Card } from "../animation/CardSwap";
import { Phone } from "lucide-react";
import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.png";
import hero4 from "../assets/img/hero4.jpg";

export default function Hero() {
  return (
    <section className="bg-[#FFFFFF] w-full mt-25 mb-15 overflow-hidden">
      <div className="max-w-10xl pl-4 sm:pl-6 lg:pl-20 pr-5 py-12 flex flex-col lg:flex-row gap:10">
        {/* LEFT SIDE (Text + CardSwap + Hero Image) */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* TEXT */}
          <div>
            <p className="text-[#478097] text-sm lg:text-lg font-semibold">
              Best website development company in Indore
            </p>

            <h1 className="m-0 font-bold text-[28px] leading-[36px] lg:text-[70px] lg:leading-[90px]">
              We are Ready to
            </h1>
            <h1 className="m-0 font-bold text-[30px] leading-[40px] lg:text-[80px] lg:leading-[90px]">
              Build Your <span className="text-[#478097]">Business</span>
            </h1>

            <p className="text-[#757575] font-medium text-xs lg:text-base leading-[20px] lg:leading-[24px] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              Lorem Ipsum has been the industry's standard dummy type and
              scrambled it to make a type specimen.
            </p>

            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-[#F26A33] hover:text-black transition"
            >
              <Phone size={20} /> Request Call
            </Link>
          </div>

          {/* CardSwap (MOBILE/TABLET ONLY) */}
          <div className="lg:hidden relative z-20">
            <div className="flex justify-center">
              <CardSwap
                // Responsive card dimensions
                width={360}
                height={320}
                cardDistance={25}
                verticalDistance={30}
                delay={5000}
                pauseOnHover={false}
                className="mx-auto sm:w-[200px] sm:h-[170px] md:w-[240px] md:h-[190px]"
              >
                {/* Card 1 */}
                <Card className="bg-white shadow-md p-3 border-2 border-[#CFFFF5]">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-black">
                    Design
                  </h3>
                  <p className="text-[13px]  leading-[14px] text-mutedText mt-1">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                  <img
                    src={hero2}
                    alt="Hero"
                    loading="lazy"
                    className="mt-2 w-full h-58 sm:h-53  md:h-50 object-cover rounded"
                  />
                </Card>

                {/* Card 2 */}
                <Card className="bg-white shadow-md p-3 border-2 border-[#FFF6D2]">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-black">
                    Development
                  </h3>
                  <p className="text-[13px] leading-[14px] text-mutedText mt-1">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                  <img
                    src={hero3}
                    loading="lazy"
                    alt="Hero"
                    className="mt-2 w-full h-58 sm:h-53  md:h-50 object-cover rounded"
                  />
                </Card>

                {/* Card 3 */}
                <Card className="bg-white shadow-md p-3 border-2 border-[#F5CDFF]">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-black">
                    Development
                  </h3>
                  <p className="text-[13px] leading-[14px] text-mutedText mt-1">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                  <img
                    src={hero4}
                    loading="lazy"
                    alt="Hero"
                    className="mt-2 w-full h-58 sm:h-53  md:h-50 object-cover rounded"
                  />
                </Card>
              </CardSwap>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative xm:mt-0 lg:mt-12">
            <img
              src={hero1}
              alt="Hero"
              loading="lazy"
              className="
                rounded-[10px] 
                w-full 
                max-w-7xl 
                h-auto 
                sm:h-60   
                md:h-60   
                lg:h-80
                object-cover
              "
            />
          </div>
        </div>

        {/* RIGHT SIDE (CardSwap for desktop only) */}
        <div className="w-full lg:w-1/3 hidden lg:flex  items-end justify-end ">
          <CardSwap
            width={950}
            height={650}
            cardDistance={40}
            verticalDistance={89}
            delay={3000}
            pauseOnHover={false}
          >
            {/* Card 1 */}
            <Card className="bg-white shadow-lg p-10 border-4 border-[#CFFFF5] border-b-0">
              <h3 className="text-2xl font-bold text-black mb-3">Design</h3>
              <p className="text-[#757575] text-[20px] leading-[28px] mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <img
                src={hero2}
                alt="Hero"
                loading="lazy"
                className="mt-3 w-full max-w-4xl h-[87%] object-cover"
              />
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-lg p-10 border-4 border-[#FFF6D2] border-b-0">
              <h3 className="text-2xl font-bold text-black mb-3">
                Development
              </h3>
              <p className="text-[#757575] text-[20px] leading-[28px] mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <img
                src={hero3}
                alt="Hero"
                loading="lazy"
                className="mt-3 w-full max-w-4xl h-[88%] object-cover"
              />
            </Card>

            {/* Card 3 */}
            <Card className="bg-white shadow-lg p-10 border-4 border-[#F5CDFF] border-b-0">
              <h3 className="text-2xl font-bold text-black mb-3">
                Development
              </h3>
              <p className="text-[#757575] text-[20px] leading-[28px] mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <img
                src={hero4}
                alt="Hero"
                loading="lazy"
                className="mt-3 w-full max-w-4xl h-[88%] object-cover"
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
