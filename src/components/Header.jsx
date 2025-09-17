import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/img/logo.png";
import Inquiry from "../components/Inquiry"; // ✅ Import once

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    // { name: "Blog", path: "/blogs" },
  ];

  const handleScroll = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-8xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" /> {/* ✅ fixed */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="relative text-gray-700 font-semibold hover:text-black transition group cursor-pointer"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => setIsInquiryOpen(true)}
              type="button"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium shadow-md hover:bg-gray-900 transition"
            >
              <Phone size={18} /> Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="block text-gray-700 font-medium hover:text-black transition cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsInquiryOpen(true)}
              type="button"
              className="flex items-center gap-2 px-5 py-2 w-max rounded-full bg-black text-white font-medium shadow-md hover:bg-gray-900 transition"
            >
              <Phone size={18} /> Contact
            </button>
          </div>
        </div>
      )}

      {/* Inquiry Modal (✅ keep only once) */}
      <Inquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </nav>
  );
}
