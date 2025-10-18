import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden py-35">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/MatchaCommercial.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌿 Logo */}
      <div className="relative z-20 mb-10">
        <img
          src="/assets/logo/Matters.png"
          alt="Matcha Matters Logo"
          className="w-40 md:w-56 drop-shadow-lg"
        />
      </div>

      {/* ✅ Order Confirmation Card */}
      <div className="relative z-20 bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-[#3C75B5] mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase,{" "}
          <span className="font-semibold text-[#3C75B5]">
            {order?.customer?.fullName || "Customer"}
          </span>
          ! Your order has been placed successfully.
        </p>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <p className="text-lg text-[#3C75B5] font-semibold">
            Payment Method: {order?.customer?.paymentMethod || "N/A"}
          </p>
          <p className="text-lg text-[#3C75B5] font-semibold">
            Total Paid: ₱{order?.total?.toLocaleString() || "0.00"}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Order ID: {order?.id || "N/A"}
          </p>
        </div>

        <Link
          to="/shop"
          className="bg-[#F7DF52] text-[#3C75B5] px-8 py-3 rounded-full font-semibold hover:bg-[#718355] hover:text-white transition-all duration-300 shadow-md"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
