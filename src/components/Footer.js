// src/components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3C75B5] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#F7DF52]">Matcha Matters</h2>
          <p className="mt-3 text-sm text-gray-200">
            Bringing the finest matcha directly to your cup. Fresh, organic, and full of energy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#F7DF52]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#F7DF52]">Home</a></li>
            <li><a href="/shop" className="hover:text-[#F7DF52]">Shop</a></li>
            <li><a href="/about" className="hover:text-[#F7DF52]">About</a></li>
            <li><a href="/contact" className="hover:text-[#F7DF52]">Contact</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#F7DF52]">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#F7DF52]">Shipping Info</a></li>
            <li><a href="#" className="hover:text-[#F7DF52]">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-[#F7DF52]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#F7DF52]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#F7DF52]">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for matcha news & exclusive deals.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-[#F7DF52] text-[#3C75B5] px-4 rounded-r-md font-semibold hover:bg-[#718355] hover:text-white transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-200">© {new Date().getFullYear()} Matcha Matters. All rights reserved.</p>
        
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a href="#" className="hover:text-[#F7DF52]"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#F7DF52]"><FaInstagram /></a>
          <a href="#" className="hover:text-[#F7DF52]"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
