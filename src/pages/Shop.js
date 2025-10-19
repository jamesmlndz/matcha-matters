import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/Products";

const Shop = () => {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section className="pt-40 pb-20 bg-gray-50 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3C75B5]">
            Shop Matcha
          </h1>
          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            Browse our premium selection of matcha powders, kits, and accessories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {["All", "Powder", "Kit", "Accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-lg font-medium transition ${
                category === cat
                  ? "bg-[#718355] text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-[#F7DF52] hover:text-[#3C75B5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col h-full max-w-xs mx-auto sm:max-w-none"
              >
                {/* Image */}
                <div className="aspect-square w-full">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow text-center">
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-[#718355]">
                      {product.name}
                    </h3>
                    <p className="text-[#3C75B5] font-bold mt-1 sm:mt-2 text-sm sm:text-base">
                      {product.price}
                    </p>
                    <p className="mt-2 text-gray-500 text-xs sm:text-sm line-clamp-2">
                      {product.tagline}
                    </p>
                    <p className="mt-1 text-gray-400 text-xs sm:text-sm line-clamp-1">
                      {product.highlight}
                    </p>
                  </div>

                  {/* Button always at the bottom */}
                  <div className="mt-auto">
                    <button className="w-full bg-[#F7DF52] text-[#3C75B5] py-2 rounded-md font-semibold hover:bg-[#718355] hover:text-white transition text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Shop;
