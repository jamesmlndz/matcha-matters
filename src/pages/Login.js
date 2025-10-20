import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(true); // 🌿 Loading state

  // Simulate loading delay (5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen font-poppins overflow-hidden">
      {/*Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#3373BA] z-50"
           
          >
            {/* Glowing & Pulsing Logo */}
            <motion.img
              src="/assets/logo/MattersWhisk.png"
              alt="Matcha Matters Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 1, 0.95],
                scale: [0.9, 1.25, 1.1, 1.25],
                
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="w-[28rem] h-auto drop-shadow-2xl"
            />

            {/* Animated Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="h-1 mt-8 bg-[#F7DF52] rounded-full shadow-md"
            ></motion.div>

            {/* Subtle “Loading...” text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 text-white font-medium tracking-wide text-lg"
            >
              Preparing your macha essentials...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Login Page */}
      {!loading && (
        <div
          className="min-h-screen flex flex-col md:flex-row overflow-hidden"
          style={{ backgroundColor: "#3373BA" }}
        >
          {/* Left Image Section */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:flex md:w-1/2 items-center justify-center"
          >
            <img
              src="/assets/logo/MattersWhisk.png"
              alt="Matcha Matters"
              className="w-3/4 h-auto object-contain drop-shadow-2xl rounded-xl"
            />
          </motion.div>

          {/* Right Login Section */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-8 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1],
                delay: 0.8,
              }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 border border-gray-100 flex flex-col items-center"
            >
              {/* Logo */}
              <motion.img
                src="/assets/logo/MattersLogo.png"
                alt="Matcha Matters Logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="-mt-14 w-64 sm:w-72 h-auto drop-shadow-md"
              />

              {/* Login Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 w-full mt-4 sm:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div>
                  <label className="block text-secondary mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-secondary mb-2 text-sm sm:text-base">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#3373BA] hover:bg-[#285C96] text-white py-3 sm:py-4 rounded-full font-semibold shadow-md transition text-sm sm:text-base"
                >
                  Log In
                </motion.button>
              </motion.form>

              {/* Register Link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="text-center mt-5 text-gray-600 text-sm sm:text-base"
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
      )}
    </div>
  );
}
