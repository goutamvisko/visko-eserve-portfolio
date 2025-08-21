import React from "react";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import logo from "../assets/img/logo.png";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-10">
        {/* Contact circle (centered, overlapping top of footer) */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-[50px]">
          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-none font-extrabold tracking-tight">
            Let’s Talk
          </h2>

          {/* Circle button */}
          <div
            className="flex-shrink-0 w-20 h-20 sm:w-[90px] sm:h-[90px] md:w-32 md:h-32 
       rounded-full border-2 border-[#F26A33] flex items-center justify-center"
          >
            <span className="text-[#F26A33] font-semibold text-xs sm:text-sm md:text-lg text-center">
              Contact us
            </span>
          </div>
        </div>

        {/* Main row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8">
          {/* Left side: Logo + Search */}
          <div className="flex items-center gap-6 w-full lg:w-auto">
            {/* Logo */}
            <img src={logo} alt="logo" className="w-10 h-15 object-contain" />

            {/* Search box */}
            <div className="flex-1 min-w-[210px] max-w-md">
              <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent w-full focus:outline-none placeholder:text-gray-400 text-gray-200"
                  aria-label="Your email"
                />
                <button className="flex items-center gap-2 text-[#F26A33] font-medium">
                  <span>Send</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* For mobile: Nav first, Social icons second */}
          <div className="flex flex-col items-center gap-4 w-full lg:hidden">
            {/* Nav */}
            <div className="border border-gray-800 py-4 w-full">
              <nav className="flex justify-center gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg">
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Portfolio
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </nav>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
                <Facebook size={14} />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
                <Youtube size={14} />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
                <Instagram size={14} />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
                <Linkedin size={14} />
              </button>
            </div>
          </div>

          {/* For desktop: Social icons on the right */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
              <Facebook size={14} />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
              <Youtube size={14} />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
              <Instagram size={14} />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#101010] border border-gray-700 flex items-center justify-center">
              <Linkedin size={14} />
            </button>
          </div>
        </div>

        {/* For desktop: Nav below everything */}
        <div className="hidden lg:block mt-8">
          <div className="border border-gray-800 py-4 w-full">
            <nav className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-sm sm:text-base md:text-lg">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Portfolio
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Blog
              </a>
            </nav>
          </div>
        </div>

        {/* divider */}
        <div className="mt-5 border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-400">
            © 2025 Visko E-Serve Pvt. Ltd. All rights reserved. Crafted with
            care and commitment to digital excellence.
          </p>
        </div>

        {/* Floating Icon */}
        {showButton && (
          <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
            <button
              onClick={scrollToTop}
              className="bg-[#F26A33] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronUp className="text-white w-6 h-5.3" />
            </button>
            <button
              onClick={scrollToBottom}
              className="bg-[#F26A33] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              ↓
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}
