import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error feedback

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
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
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center text-secondary mb-8">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
    </section>
  );
}
