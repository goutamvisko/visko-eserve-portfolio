import React,{useEffect,useState} from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyUs from "../components/WhyUs";
import Inquiry from "../components/Inquiry"
import Testimonials from "../components/Testimonials";
import Technologies from "../components/Technologies";

export default function LandingPage() {
    const [showInquiry, setShowInquiry] = useState(false);

    // Show inquiry form modal only on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("isInquiry");
    if (!hasVisited) {
      setShowInquiry(true);
      localStorage.setItem("isInquiry", "true");
    }
  }, []);
  
  return (
    <>
      <Hero  id="hero"/>
      <AboutUs id="about"/>
      <Services id="services" />
      <Projects id="portfolio" />
      <WhyUs  />
      <Technologies />
      <Testimonials/>
      {/*Inquiry Modal Popup */}
      {showInquiry && (
        <Inquiry
          isOpen={showInquiry}
          onClose={() => setShowInquiry(false)}
        />
      )}
    </>
  );
}