import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/home" || location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-[#3373BA]";
  const iconColor = isHome ? "text-white" : "text-[#3373BA]";
  const hoverColor = "hover:text-[#F7DF52]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-white/90 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left Menu (hidden on mobile) */}
        <ul className={`hidden md:flex gap-6 text-lg font-medium ${textColor}`}>
          {["Home", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item === "Home" ? "home" : item.toLowerCase()}`}
                className={`relative group transition ${hoverColor}`}
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F7DF52] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-extrabold tracking-wide z-20">
          <Link
            to="/home"
            className={`transition ${isHome ? "text-[#F7DF52]" : "text-[#3373BA]"} ${hoverColor}`}
          >
            Matcha Matters
          </Link>
        </div>

        {/* Right Menu (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className={`flex gap-6 text-lg font-medium ${textColor}`}>
            <li>
              <Link
                to="/shop"
                className={`relative group transition ${hoverColor}`}
              >
                Shop
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F7DF52] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          <Link
            to="/cart"
            className={`${iconColor} ${hoverColor} transition text-2xl`}
          >
            <FaShoppingCart />
          </Link>
        </div>

        {/* Mobile Hamburger + Icons */}
        <div className="md:hidden flex items-center gap-4 z-20">
          <Link to="/cart" className={`${iconColor} text-2xl`}>
            <FaShoppingCart />
          </Link>
          <Link to="/login" className={`${iconColor} text-2xl`}>
            <FaUser />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${iconColor} transition`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-md transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-semibold text-[#3373BA]">
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
      </div>
    </nav>
  );
};

export default Navbar;
