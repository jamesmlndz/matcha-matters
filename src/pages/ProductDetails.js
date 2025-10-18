// src/pages/ProductDetails.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../data/Products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-gray-500">Product not found.</p>
      </div>
    );
  }

  // ✅ Updated Add to Cart
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      tagline: product.tagline,
      highlight: product.highlight,
    };
  
    addToCart(cartItem); // ✅ directly adds to context
    navigate("/cart"); // ✅ go to cart after adding
  };
  

  return (
    <div className="pt-40 pb-24 px-6 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start bg-white p-10 rounded-2xl shadow-lg">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={product.img}
              alt={product.name}
              className="w-[450px] h-[450px] object-cover rounded-2xl shadow-md border border-gray-200"
            />
            <div className="absolute -top-4 -right-4 bg-[#F7DF52] text-[#3C75B5] font-semibold px-4 py-1 rounded-full text-sm shadow-md">
              {product.tag || "New Arrival"}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-[#3C75B5] mb-3">
              {product.name}
            </h1>
            <div className="h-[3px] w-16 bg-[#F7DF52] mb-4 rounded-full"></div>
            <p className="text-[#718355] font-semibold text-2xl mb-2">
              {product.price}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.tagline}</p>
          <p className="text-gray-500 leading-relaxed">{product.highlight}</p>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#F7DF52] text-[#3C75B5] py-3 rounded-full font-semibold text-lg hover:bg-[#718355] hover:text-white transition-all duration-300 shadow-md"
            >
              Add to Cart
            </button>

            <Link
              to="/shop"
              className="w-full text-center py-3 rounded-full border-2 border-[#3C75B5] text-[#3C75B5] font-semibold text-lg hover:bg-[#3C75B5] hover:text-white transition-all duration-300"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
