import React,{useEffect,useState} from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyUs from "../components/WhyUs";
import Inquiry from "../components/Inquiry"

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
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <WhyUs />
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