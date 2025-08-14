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
    <section className="bg-[#FFFFFF] w-full mt-25 ">
      <div className="max-w-10xl  pl-10  sm:pl-4 lg:pl-20 pr-4 sm:pr-6 py-16 flex flex-col lg:flex-row items-start gap-3">
        {/* Left Side */}
        <div className="w-full lg:w-[100%] relative">
          <p className="text-[#478097] text-sm lg:text-lg font-semibold">
            Best website development company in Indore
          </p>

          <h1 className="font-bold text-[28px] leading-[36px] lg:text-[70px] lg:leading-[110px]">
            We are Ready to
          </h1>

          <h1 className="font-bold text-[30px] leading-[40px] lg:text-[80px] lg:leading-[110px]">
            Build Your <span className="text-[#478097]">Business</span>
          </h1>

          <p className="text-[#757575] font-medium text-xs lg:text-base leading-[20px] lg:leading-[24px] mt-3">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
           Lorem Ipsum has been the industry's standard dummy text ever since the  industry's standard dummy text ever since the 1500s.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-[#F26A33] hover:text-black transition"
          >
            <Phone size={20} /> Request Call
          </Link>

          {/* Image + Mobile CardSwap */}
          <div className="relative mt-8">
            <img
              src={hero1}
              alt="Hero"
              className="rounded-[20px] h-70 w-full max-w-6xl"
            />
            <div className="absolute top-1/2 md:top-[95%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:hidden">
              <CardSwap
                width={250}
                height={220}
                cardDistance={40}
                verticalDistance={50}
                delay={5000}
                pauseOnHover={false}
              >
                {/* Cards for mobile */}
                {/* Card 1 */}
                <Card className="bg-white shadow-lg p-4 border-4 border-[#CFFFF5]">
                  <h3 className="text-lg font-bold text-black">Design</h3>
                  <p className="text-sm leading-[20px] text-mutedText mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium.
                  </p>
                  <img
                    src={hero2}
                    alt="Hero"
                    className="mt-3  h-18   w-full object-cover"
                  />
                </Card>

                {/* Card 2 */}
                <Card className="bg-white shadow-lg p-4 border-4 border-[#FFF6D2]">
                  <h3 className="text-lg font-bold text-black">Development</h3>
                  <p className="text-mutedText  text-sm leading-[20px] mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium.
                  </p>
                  <img
                    src={hero3}
                    alt="Hero"
                    className="mt-3 h-18   w-full object-cover"
                  />
                </Card>
                {/* Card 3 */}
                <Card className="bg-white shadow-lg p-4 border-4 border-[#F5CDFF]">
                  <h3 className="text-lg font-bold text-black">Development</h3>
                  <p className="text-[#757575]  text-sm leading-[20px] mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium.
                  </p>
                  <img
                    src={hero4}
                    alt="Hero"
                    className="mt-3  h-18   w-full object-cover"
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 relative hidden lg:block min-h-[500px]">
          <div className="absolute bottom-[-20%] right-[-10%]">
            <CardSwap
              width={650}
              height={500}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {/* Cards for desktop */}
              {/* Card 1 */}
              <Card className="bg-white shadow-lg p-5 pb-5 lg:pb-15 border-4 border-[#CFFFF5]">
                <h3 className="text-2xl font-bold text-black">Design</h3>
                <p className="text-[#757575] font-normal text-[13px] leading-[28px] mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium.
                </p>
                <img
                  src={hero2}
                  alt="Hero"
                  className="mt-3 w-full max-w-2xl h-93"
                />
              </Card>
              {/* Card 2 */}
              <Card className="bg-white shadow-lg  p-5 pb-5 lg:pb-15 border-4 border-[#FFF6D2]">
                <h3 className="text-2xl font-bold text-black">Development</h3>
                <p className="text-[#757575] font-normal text-[13px] leading-[28px] mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium.
                </p>
                <img
                  src={hero3}
                  alt="Hero"
                  className="mt-3  h-93 0 w-full max-w-2xl"
                />
              </Card>
              {/* Card 3 */}
              <Card className="bg-white shadow-lg  p-5 pb-5 lg:pb-15 border-4 border-[#F5CDFF]">
                <h3 className="text-2xl font-bold text-black">Development</h3>
                <p className="text-[#757575] font-normal text-[13px] leading-[28px] mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium.
                </p>
                <img
                  src={hero4}
                  alt="Hero"
                  className="mt-3  h-93  w-full max-w-2xl"
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
