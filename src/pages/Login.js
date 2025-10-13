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
      className="min-h-screen flex flex-col md:flex-row font-poppins overflow-hidden"
      style={{ backgroundColor: "#3373BA" }}
    >
      {/* 🌿 Left Image Section */}
      <motion.div
        initial={{ x: -200, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
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
        className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-10"
      >
        {/* ✨ Animated Login Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1],
            delay: 0.8,
          }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 border border-gray-200 flex flex-col items-center relative"
        >
          {/* 🖼️ Bigger Logo */}
          <motion.img
            src="/assets/logo/Matters.png"
            alt="Matcha Matters Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }} // bigger logo
            transition={{ duration: 0.8, delay: 1 }}
            className="-mt-16 w-80 h-auto drop-shadow-md" // closer to form
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
              <label className="block text-secondary mb-2 text-base">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>

            <div>
              <label className="block text-secondary mb-2 text-base">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-secondary text-white py-4 rounded-full font-semibold shadow-md hover:bg-accent transition text-base"
            >
              Log In
            </motion.button>
          </motion.form>

          {/* 🧭 Register Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-center mt-4 text-gray-600 text-base"
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-secondary font-semibold hover:underline"
            >
              Register
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
