import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 w-full max-w-xs mx-auto">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 sm:h-48 md:h-56 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 sm:p-5 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-[#245A2D]">
          {name}
        </h3>
        <p className="text-gray-700 mt-2 font-medium text-sm sm:text-base">
          ₱{price}
        </p>
        <button className="mt-4 w-full bg-[#F7DF52] text-[#245A2D] px-4 py-2 rounded-lg font-semibold hover:bg-[#718355] hover:text-white transition text-sm sm:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
