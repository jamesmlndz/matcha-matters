import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-accent to-secondary text-white text-center py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Discover the Magic of Matcha 
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-gray-200">
          Premium matcha powders and blends crafted to energize your day with
          wellness and flavor.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/shop"
            className="bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-accent transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
