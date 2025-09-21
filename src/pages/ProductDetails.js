// src/pages/ProductDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/Products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-[#718355] mb-4">
            {product.name}
          </h1>
          <p className="text-[#3C75B5] font-bold text-xl mb-4">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.tagline}</p>
          <p className="text-gray-500 mb-6">{product.highlight}</p>

          {/* Add to Cart Button */}
          <button className="w-full bg-[#F7DF52] text-[#3C75B5] py-3 rounded-md font-semibold hover:bg-[#718355] hover:text-white transition mb-4">
            Add to Cart
          </button>

          {/* Back to Shop Button */}
          <Link
            to="/shop"
            className="inline-block w-full text-center px-6 py-3 rounded-md bg-gray-100 text-gray-700 font-semibold hover:bg-[#718355] hover:text-white transition"
          >
             Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
