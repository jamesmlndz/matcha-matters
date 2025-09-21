export default function Contact() {
    return (
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">
          Contact Us
        </h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button className="w-full px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-primary hover:text-secondary transition">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  