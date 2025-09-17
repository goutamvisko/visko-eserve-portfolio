import { useState } from "react";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/img/logo.png";
import Inquiry from "../components/Inquiry";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "hero", route: "/" },
    { name: "About", path: "about", route: "/" },
    { name: "Services", path: "services", route: "/" },
    { name: "Portfolio", path: "portfolio", route: "/" },
    { name: "Blogs", path: "blogs", route: "/blogs" },
  ];

 
const handleNavClick = (link) => {
  if (link.route === "/blogs") {
    navigate(link.route);
  } else if (location.pathname === "/") {
    scroller.scrollTo(link.path, { smooth: true, duration: 500, offset: -80 });
  } else {
    navigate("/", { state: { scrollTo: link.path } });
  }
  setIsOpen(false);
};

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white w-full z-50 shadow-md mb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(navLinks[0])}>
            <img src={logo} alt="Logo" className="h-22 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-bold">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className="text-gray-700 hover:text-gray-900 transition cursor-pointer"
                onClick={() => handleNavClick(link)}
              >
                {link.name}
              </span>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer"
            >
              <Phone size={18} /> Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className="block text-gray-700 hover:text-gray-900 transition cursor-pointer font-medium"
                onClick={() => handleNavClick(link)}
              >
                {link.name}
              </span>
            ))}
            <button
              onClick={() => {
                setIsInquiryOpen(true);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              <Phone size={18} /> Contact
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <Inquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
     
    </nav>
  );
}

