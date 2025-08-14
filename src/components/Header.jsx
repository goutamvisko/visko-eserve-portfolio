import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/img/logo.png";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white w-full  z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex justify-between h-26 items-center">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="My Logo" className="h-22 w-auto" />
            </Link>
          </div>

          {/* Center - Links (Desktop) */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-gray-900 transition font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right - Contact Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              <Phone size={18} /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-gray-700 hover:text-gray-900 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="flex items-center gap-2 w-[140px] bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} /> Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
