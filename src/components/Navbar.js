import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/home" || location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-[#3373BA]";
  const hoverColor = "hover:text-[#F7DF52]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-white/90 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left side (mobile hamburger or desktop menu) */}
        <div className="flex items-center">
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} focus:outline-none`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Left Menu */}
          <ul className="hidden md:flex gap-6 text-lg font-medium ml-2">
            {["Home", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "home" : item.toLowerCase()}`}
                  className={`relative group transition ${textColor} ${hoverColor}`}
                >
                  {item}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#F7DF52] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-extrabold tracking-wide z-10">
          <Link
            to="/home"
            className={`transition ${isHome ? "text-[#F7DF52]" : "text-[#3373BA]"} ${hoverColor}`}
          >
            Matcha Matters
          </Link>
        </div>

        {/* Right side icons / desktop menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Right Menu */}
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            <li>
              <Link
                to="/shop"
                className={`relative group transition ${textColor} ${hoverColor}`}
              >
                Shop
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#F7DF52] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Cart / Login Icons */}
          <Link to="/cart" className={`${textColor} text-2xl ${hoverColor}`}>
            <FaShoppingCart />
          </Link>
          <Link to="/login" className={`${textColor} text-2xl ${hoverColor}`}>
            <FaUser />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-md transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-0 flex flex-col items-center justify-center gap-8 text-2xl font-semibold text-[#3373BA]`}
      >
        {["Home", "Contact", "Shop"].map((item) => (
          <Link
            key={item}
            to={`/${item === "Home" ? "home" : item.toLowerCase()}`}
            className="hover:text-[#F7DF52] transition"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
