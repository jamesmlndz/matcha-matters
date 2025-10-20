import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-poppins">
      {/*HERO  SECTION WITHVIDEO */}
      <motion.section
        className="relative py-40 text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/MatchaCommercial.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <motion.div
          className="relative max-w-3xl mx-auto z-10"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Whisk. Sip. Enjoy
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the essence of matcha with Matcha Matters
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-primary text-secondary font-bold rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.section>

      {/*WHY MATCHA SECTION */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Logo/Image */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/logo/Text.png"
              alt="Matcha Matters Logo"
              className="w-70 h-auto object-contain"
            />
          </motion.div>

          {/* Right Side  */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Why Choose Matcha Matters?
            </h2>
            <p className="text-gray-700 mb-4">
              At Matcha Matters, we provide the highest quality ceremonial
              matcha to elevate your daily rituals. Enjoy the perfect balance of
              flavor, energy, and mindfulness.
            </p>
            <p className="text-gray-700 mb-4">
              Embrace a mindful tea experience and transform your everyday
              moments with Matcha Matters.
            </p>

            {/* Instagram Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/machamatters?igsh=NGNpNXU4MXl3YmFv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-[#3373BA] hover:bg-[#F7DF52] text-white font-medium rounded-full transition-all duration-300 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.75a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5Zm0 1.5a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5Zm5.5-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" />
                </svg>
                Follow Us on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Advertisement section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/assets/ads/ad3.png"
                alt="Ad 1"
                className="w-full h-auto object-contain hover:scale-105 transition duration-700"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/assets/ads/ad2.png"
                alt="Ad 2"
                className="w-full h-auto object-contain hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Large Image) */}
          <motion.div
            className="md:col-span-2 rounded-3xl overflow-hidden shadow-xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/ads/ad1.png"
              alt="Main Ad"
              className="w-full h-auto object-contain hover:scale-105 transition duration-700"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Shop by Category */}
      <motion.section
        className="py-40 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/backgrounds/MatchaBg.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-12"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[
              { name: "Pure Matcha", img: "/assets/products/Ceremonial.jpeg" },
              { name: "Tea Sets", img: "/assets/products/TeaSets.png" },
              { name: "Accessories", img: "/assets/products/Accessories.jpeg" },
            ].map((cat, i) => (
              <motion.div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-2xl font-bold">
                    {cat.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About / Brand Section */}
      <motion.section
        className="bg-white py-20 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT SIDE — Image */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-4">
              <img
                src="/assets/logo/MatchaAcc.png"
                alt="Matcha Cup"
                className="w-full max-w-md md:max-w-lg rounded-xl shadow-sm object-contain hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE — Text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-[#1E1E1E] text-lg md:text-xl leading-relaxed font-medium max-w-md">
              Selling a wide variety of matcha powders and matcha-making
              equipment sourced from premium brands around the globe.
            </p>

            <div className="flex gap-5 items-center">
              <div className="w-27 h-27 flex items-center justify-center">
                <img
                  src="/assets/icons/Curve.png"
                  alt="Curve Icon"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-27 h-27 flex items-center justify-center">
                <img
                  src="/assets/icons/Star.png"
                  alt="Star Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/*Featured Products */}
      <section className="py-20 bg-white">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Featured Products
          </h2>
          <Link
            to="/shop"
            className="text-primary font-semibold hover:underline"
          >
            View More
          </Link>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto px-6">
          {[
            {
              id: 1,
              name: "Jeju Matcha",
              price: "₱750 – ₱1,200",
              img: "/assets/products/Jeju.png",
            },
            {
              id: 2,
              name: "Kyoto Matcha",
              price: "₱950 – ₱1,500",
              img: "/assets/products/Kyoto.png",
            },
            {
              id: 3,
              name: "Fukujuen Matcha",
              price: "₱1,200 – ₱1,800",
              img: "/assets/products/Fukujuen.png",
            },
          ].map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 text-center border border-gray-100"
            >
              <div className="w-full aspect-square mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                {product.name}
              </h3>
              <p className="text-accent mt-2">{product.price}</p>
              <button className="mt-4 px-6 py-2 bg-primary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

    {/* Something for You */}
    <section className="py-20 bg-white text-center overflow-hidden">
      <motion.h2
        className="text-4xl font-bold text-[#3373BA] mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Something for You
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center px-6 relative">
        {[
          "/assets/icons/yellow.png",
          "/assets/products/Jeju.png",
          "/assets/icons/red.png",
          "/assets/products/Kyoto.png",
          "/assets/products/Fukujuen.png",
          "/assets/icons/green.png",
          "/assets/products/Isshiki.png",
          "/assets/icons/blue.png",
        ].map((src, i) => (
          <motion.div
            key={i}
            className="flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.img
              src={src}
              alt={`Something ${i}`}
              className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </div>
    </section>

        
          {/* Best Sellers */}
    <section
      className="py-40 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/assets/products/BestSeller.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        {/* Title + View More */}
        <motion.div
          className="flex justify-between items-center max-w-7xl mx-auto px-6 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white">Best Sellers</h2>
          <Link
            to="/shop"
            className="text-[#F7DF52] font-semibold hover:underline"
          >
            View More
          </Link>
        </motion.div>

        {/* Product Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6">
          {[
            {
              name: "Ceremonial Matcha",
              img: "/assets/products/Chameberlain.png",
            },
            {
              name: "Matcha Starter Kit",
              img: "/assets/logo/MatchaAcc.png",
            },
            {
              name: "Bamboo Whisk",
              img: "/assets/Kits/Whisk.png",
            },
            {
              name: "Iced Matcha Blend",
              img: "/assets/icons/matcha-glass.png",
            },
          ].map((prod, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={prod.img}
                alt={prod.name}
                className="w-full h-48 object-cover rounded-md mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <h3 className="text-lg font-semibold text-secondary">
                {prod.name}
              </h3>
              <p className="text-accent mt-2">{prod.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Matcha Latte Highlight Section */}
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-white py-20 px-8 overflow-hidden">

      
      {/* Yellow Rounded Box */}
      <motion.div
        className="relative bg-[#F7DF52] rounded-3xl p-10 md:p-14 max-w-4xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center gap-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >

          {/* Japanese Text */}
          <motion.h3
          className="absolute text-5xl md:text-6xl font-bold text-[#D64541] top-[-3rem] md:top-[-4rem] tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          オツミルク
        </motion.h3>

        {/* Matcha Glass Image (Left) */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/icons/matcha-glass.png"
            alt="Matcha Latte"
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Text Content (Right) */}
        <motion.div
          className="flex flex-col text-left max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#245A2D] mb-3">
            Matcha Latte
          </h2>
          <p className="text-lg md:text-2xl text-black leading-relaxed">
            Experience the smooth blend of premium Japanese matcha and creamy milk —
            the perfect way to energize your day.
          </p>
        </motion.div>
      </motion.div>

      {/* Blue Circle + Hand Image */}
      <motion.div
        className="relative mt-16 md:mt-0 md:ml-[-80px] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* Blue Circle */}
        <div className="w-64 h-64 bg-[#2967B0] rounded-full relative z-0 shadow-[0_8px_30px_rgba(41,103,176,0.3)]"></div>

        {/* Hand Image */}
        <motion.img
          src="/assets/icons/whiskingmmatcha.png"
          alt="Whisking Matcha"
          className="absolute w-72 h-72 object-contain z-10 right-0 bottom-0"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>


    <section className="relative bg-[#F7DF52] py-28 px-10 md:px-24 overflow-hidden">
  <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
    {/* LEFT: Product Images */}
    <div className="flex gap-8 md:gap-12">
      <div className="flex flex-col gap-8">
        <img
          src="/assets/Kits/Whisk.png"
          alt="Matcha Whisk"
          className="w-44 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/assets/Kits/Strain.png"
          alt="Matcha Strainer"
          className="w-44 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-8">
        <img
          src="/assets/Kits/Package.png"
          alt="Matcha Starter Package"
          className="w-44 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/assets/Kits/Scoop.png"
          alt="Matcha Scoop"
          className="w-44 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    {/* RIGHT: Text + Button */}
    <div className="text-center md:text-left max-w-md md:max-w-lg">
      <h2 className="text-5xl md:text-6xl font-extrabold text-[#3373BA] mb-5 tracking-tight drop-shadow-sm">
        Starter Kits
      </h2>
      <p className="text-[#245A2D] text-xl leading-relaxed mb-10">
        Our curated starter kits are perfect for both beginners and matcha lovers.
        Each set includes premium tools handpicked from authentic matcha artisans
        — everything you need to start your matcha ritual right at home.
      </p>

      <Link
        to="/shop"
        className="inline-block bg-[#3373BA] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#1F56B3] hover:shadow-xl transition-all duration-300"
      >
        Shop Now
      </Link>
    </div>
  </div>

  {/* Decorative Circle */}
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFE866] rounded-full blur-3xl opacity-50"></div>
</section>





{/* Testimonials */}
<section className="relative py-28 bg-white overflow-hidden">
  {/* Title */}
  <h2 className="text-5xl md:text-6xl font-extrabold text-center text-[#F7DF52] mb-16 tracking-tight">
  ⋆˚꩜｡What Our Customers Say
  ⭑.ᐟ
  </h2>

  {/* Testimonials Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-12 relative z-10">
    {[
      {
        name: "Samantha",
        text: "The matcha is so smooth and fresh! I can feel the energy boost without the crash.",
      },
      {
        name: "David",
        text: "Beautiful packaging and amazing flavor. Matcha Matters is my go-to shop.",
      },
      {
        name: "Lina",
        text: "I love their starter kits! Everything I needed to begin my matcha journey.",
      },
    ].map((review, i) => (
      <div
        key={i}
        className="bg-white p-10 rounded-3xl shadow-lg border border-[#F1F1F1] text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      >
        <p className="italic text-gray-700 text-lg mb-6 leading-relaxed">
          “{review.text}”
        </p>
        <h4 className="font-bold text-[#3373BA] text-xl">{review.name}</h4>
        <div className="mt-2 flex justify-center">
          <span className="w-16 h-1 bg-[#F7DF52] rounded-full"></span>
        </div>
      </div>
    ))}
  </div>

  {/* Decorative Floating Quotes */}

</section>


{/* Frequently Asked Questions */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16 px-6 md:px-12">
    
    {/* Left Side - Title */}
    <div className="md:w-1/2">
      <h2 className="text-5xl md:text-6xl font-extrabold text-[#3373BA] mb-6 tracking-tight">
        Frequently Asked Questions ᯓ★
      </h2>
      <p className="text-[#3373BA] text-lg leading-relaxed max-w-md">
        Got questions about our matcha, shipping, or starter kits?  
        We’ve got all the answers right here.
      </p>
    </div>

    {/* Right Side - FAQ List */}
    <div className="md:w-1/2 space-y-6">
      {[
        {
          question: "What makes Matcha Matters products different?",
          answer:
            "We source our matcha directly from trusted Japanese farms, ensuring every product delivers authentic flavor, vibrant color, and maximum health benefits.",
        },
        {
          question: "How should I store my matcha?",
          answer:
            "Keep your matcha in an airtight container in a cool, dry place. For the best freshness, refrigerate it after opening and use within 60 days.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes! We proudly ship worldwide. Shipping rates and delivery times may vary depending on your location.",
        },
        {
          question: "What’s included in the Starter Kit?",
          answer:
            "Our Starter Kit includes premium Japanese matcha, a bamboo whisk (chasen), a scoop (chashaku), and a strainer everything you need for a perfect matcha session.",
        },
      ].map((faq, i) => (
        <details
          key={i}
          className="group bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 open:shadow-md"
        >
          <summary className="cursor-pointer flex justify-between items-center p-6 text-left list-none">
            <h3 className="text-xl font-semibold text-[#3373BA]">
              {faq.question}
            </h3>
            <span className="text-[#F7DF52] text-3xl transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>



            

      {/*Newsletter */}
      <section className="py-20 bg-secondary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="mb-8 text-lg">
          Subscribe for updates, special offers, and new product launches.
        </p>
        <form className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button className="px-8 bg-primary text-secondary font-bold rounded-r-full hover:bg-accent hover:text-white transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
