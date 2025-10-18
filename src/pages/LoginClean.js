import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row font-poppins overflow-hidden bg-[#3373BA]"
    >
      {/* 🌿 Left Image Section */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:flex md:w-1/2 items-center justify-center"
      >
        <img
          src="/assets/logo/Matters.png"
          alt="Matcha Matters"
          className="w-3/4 h-auto object-contain drop-shadow-2xl rounded-xl"
        />
      </motion.div>

      {/* 🍵 Right Login Form Section */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-10"
      >
        {/* ✨ Login Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1], delay: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10 border border-gray-200 flex flex-col items-center relative"
        >
          {/* 🖼️ Logo */}
          <motion.img
            src="/assets/logo/MattersLogo.png"
            alt="Matcha Matters Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="-mt-14 w-56 sm:w-64 h-auto drop-shadow-md"
          />

          {/* 🪄 Login Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div>
              <label className="block text-[#3373BA] mb-2 text-base font-medium">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3373BA] text-base"
              />
            </div>

            <div>
              <label className="block text-[#3373BA] mb-2 text-base font-medium">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3373BA] text-base"
              />
            </div>

            <div className="text-right text-sm">
              <Link
                to="/forgot-password"
                className="text-[#3373BA] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#3373BA] text-white py-4 rounded-full font-semibold shadow-md hover:bg-[#2A5C94] transition text-base"
            >
              Log In
            </motion.button>
          </motion.form>

          {/* 🧭 Register Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-center mt-6 text-gray-600 text-base"
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#3373BA] font-semibold hover:underline"
            >
              Register
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
