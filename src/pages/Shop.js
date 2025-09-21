// src/pages/Shop.js
import React, { useState } from "react";

const Shop = () => {
  // Sample product data (replace with real data later)
  const products = [
    {
      id: 1,
      name: "Premium Matcha",
      price: 24.99,
      category: "Powder",
      img: "https://placehold.co/400x300?text=Premium+Matcha",
    },
    {
      id: 2,
      name: "Matcha Latte Kit",
      price: 34.99,
      category: "Kit",
      img: "https://placehold.co/400x300?text=Matcha+Latte+Kit",
    },
    {
      id: 3,
      name: "Ceremonial Matcha",
      price: 44.99,
      category: "Powder",
      img: "https://placehold.co/400x300?text=Ceremonial+Matcha",
    },
    {
      id: 4,
      name: "Iced Matcha Mix",
      price: 19.99,
      category: "Drinks",
      img: "https://placehold.co/400x300?text=Iced+Matcha+Mix",
    },
    {
      id: 5,
      name: "Matcha Whisk Set",
      price: 29.99,
      category: "Accessories",
      img: "https://placehold.co/400x300?text=Whisk+Set",
    },
  ];

  // Filtering state
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3C75B5]">Shop Matcha</h1>
        <p className="mt-2 text-gray-600">
          Browse our premium selection of matcha powders, kits, and accessories.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-10">
        {["All", "Powder", "Kit", "Drinks", "Accessories"].map((cat) => (
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
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#718355]">
                {product.name}
              </h3>
              <p className="text-[#3C75B5] font-bold mt-2">${product.price}</p>
              <button className="mt-4 w-full bg-[#F7DF52] text-[#3C75B5] py-2 rounded-md font-semibold hover:bg-[#718355] hover:text-white transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
