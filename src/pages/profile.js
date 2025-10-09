import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you could also clear user auth data if you have any
    navigate("/login"); // Redirect to login page
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 font-poppins">
      {/* Profile Card */}
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-secondary text-white py-6 px-6 text-center">
          <h2 className="text-3xl font-bold mb-1">My Profile</h2>
          <p className="text-sm text-[#F7DF52]">Welcome back to Matcha Matters 🌿</p>
        </div>

        {/* Profile Info */}
        <div className="p-8 space-y-6">
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/120"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-primary shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-secondary">James Melendez</h3>
            <p className="text-gray-500">jamesmelendez@example.com</p>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Member Since:</span>
              <span className="text-secondary">May 2024</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Total Orders:</span>
              <span className="text-secondary">12</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Favorite Blend:</span>
              <span className="text-secondary">Ceremonial Grade Matcha</span>
            </div>
          </div>

          <div className="pt-6">
            <button className="w-full bg-primary text-secondary font-bold py-3 rounded-lg shadow-md hover:bg-[#ffe86c] transition">
              Edit Profile
            </button>
          </div>

          <div>
            <button
              onClick={handleLogout}
              className="w-full border border-secondary text-secondary font-semibold py-3 rounded-lg hover:bg-secondary hover:text-white transition"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
