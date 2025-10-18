// src/pages/Shop.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/Products"; // ✅ all lowercase

const Shop = () => {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3C75B5]">Shop Matcha</h1>
        <p className="mt-2 text-gray-600">
          Browse our premium selection of matcha powders, kits, and accessories.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-10">
        {["All", "Powder", "Kit",  "Accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              category === cat
                ? "bg-[#718355] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-[#F7DF52] hover:text-[#3C75B5]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/shop/${product.id}`}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col h-full">
              {/* Square image */}
              <div className="aspect-square w-full">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product details */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#718355]">
                  {product.name}
                </h3>
                <p className="text-[#3C75B5] font-bold mt-2">
                  {product.price}
                </p>
                <p className="mt-2 text-gray-500 text-sm line-clamp-2">
                  {product.tagline}
                </p>
                <p className="mt-1 text-gray-400 text-sm line-clamp-1">
                  {product.highlight}
                </p>

                {/* Added spacing before button */}
                <div className="mt-6">
                  <button className="w-full bg-[#F7DF52] text-[#3C75B5] py-2 rounded-md font-semibold hover:bg-[#718355] hover:text-white transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
