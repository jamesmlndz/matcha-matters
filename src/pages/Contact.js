import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="pt-40 pb-20 bg-gray-50 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-secondary mb-8">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-12 text-lg">
          Have questions or feedback? We’d love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-primary hover:text-secondary transition"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`text-center font-medium ${
                status.includes("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
