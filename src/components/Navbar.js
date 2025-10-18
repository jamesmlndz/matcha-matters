import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Detect if current page is home
  const isHome = location.pathname === "/home" || location.pathname === "/";

  // Dynamic color based on page
  const textColor = isHome ? "text-white" : "text-[#3373BA]";
  const iconColor = isHome ? "text-white" : "text-[#3373BA]";
  const hoverColor = "hover:text-[#F7DF52]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${
        isHome ? "bg-transparent" : "bg-white/90 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-extrabold tracking-wide ${hoverColor}`}>
          <Link
            to="/home"
            className={isHome ? "text-[#F7DF52]" : "text-[#3373BA]"}
          >
            Matcha Matters
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className={`flex gap-8 text-lg font-medium ${textColor}`}>
            {["Home", "Shop", "Contact"].map((item) => (
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

          {/* Icons */}
          <div className="flex items-center gap-5 ml-6">
            <Link
              to="/cart"
              className={`${iconColor} ${hoverColor} transition text-2xl`}
            >
              <FaShoppingCart />
            </Link>
            {/* <Link
              to="/profile"
              className={`${iconColor} ${hoverColor} transition text-2xl`}
            >
              <FaUser />
            </Link> */}
          </div>
        </div>

        {/* Mobile Hamburger + Icons */}
        <div className="md:hidden flex items-center gap-4">
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
      {isOpen && (
        <div
          className={`md:hidden ${
            isHome ? "bg-[#3C75B5]/90" : "bg-white/90"
          } backdrop-blur-md px-6 py-4 ${
            isHome ? "text-white" : "text-[#2A6EEA]"
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {["Home", "Shop", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "home" : item.toLowerCase()}`}
                  className={`block ${hoverColor} transition`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
