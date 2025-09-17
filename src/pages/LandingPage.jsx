import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyUs from "../components/WhyUs";
import Inquiry from "../components/Inquiry";
import Testimonials from "../components/Testimonials";
import Technologies from "../components/Technologies";

export default function LandingPage() {
  const [showInquiry, setShowInquiry] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Show inquiry modal on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("isInquiry");
    if (!hasVisited) {
      setShowInquiry(true);
      localStorage.setItem("isInquiry", "true");
    }
  }, []);

  const sectionMap = {
    home: "hero",
    about: "about",
    services: "services",
    portfolio: "portfolio",
  };

  // Scroll after DOM updates
  useLayoutEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const section = sectionMap[scrollToId.toLowerCase()] || scrollToId;

      scroller.scrollTo(section, { smooth: true, duration: 500, offset: -80 });

      // Clear state so next click works
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <>
      <Hero id="hero" />
      <AboutUs id="about" />
      <Services id="services" />
      <Projects id="portfolio" />
      <WhyUs />
      <Technologies />
      <Testimonials />
      {showInquiry && <Inquiry isOpen={showInquiry} onClose={() => setShowInquiry(false)} />}
    </>
  );
}
