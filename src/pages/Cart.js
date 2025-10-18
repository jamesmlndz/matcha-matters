// src/pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAF8] text-center px-6">
        {/* 🛒 Empty Cart Icon */}
        <motion.img
          src="/assets/logo/Mattersblue.png"
          alt="Empty Cart"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-48 sm:w-60 h-auto mb-6 opacity-90"
        />

        {/* Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-[#3C75B5] mb-2"
        >
          Your cart is empty
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 mb-8 max-w-md"
        >
          Looks like you haven’t added anything yet
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link
            to="/shop"
            className="bg-[#3C75B5] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#718355] hover:text-white transition-all shadow-md"
          >
            Go to Shop
          </Link>
        </motion.div>
      </div>
    );
  }

  // 🛍️ When cart has items
  return (
    <div className="pt-40 pb-24 px-6 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-[#3C75B5] mb-6">My Cart</h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-200 pb-4"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover border"
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#3C75B5]">
                    {item.name}
                  </h2>
                  <p className="text-[#718355] font-medium">{item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-2 text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center">
          <p className="text-2xl font-bold text-[#3C75B5]">
            Total: ₱{total.toLocaleString()}
          </p>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-[#F7DF52] text-[#3C75B5] py-3 px-8 rounded-full font-semibold hover:bg-[#718355] hover:text-white transition-all"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
