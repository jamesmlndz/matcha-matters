import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); // Redirect to home after registration
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center font-poppins overflow-hidden"
      style={{ backgroundColor: "#F7DF52" }}
    >
      {/* ✨ Animated Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-secondary mb-6"
        >
          Join Matcha Matters 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center text-gray-600 mb-8 text-base"
        >
          Create an account to elevate your rituals
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div>
            <label className="block text-secondary mb-2 text-base">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-base"
            />
          </div>

          <div>
            <label className="block text-secondary mb-2 text-base">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-base"
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
              className="w-full px-5 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-base"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-secondary text-white py-3.5 rounded-full font-semibold shadow-md hover:bg-accent hover:text-white transition text-base"
          >
            Register
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="text-center mt-6 text-gray-600 text-base"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-secondary font-semibold hover:underline"
          >
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
