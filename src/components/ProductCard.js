import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-accent">{name}</h3>
        <p className="text-gray-700 mt-2 font-medium">₱{price}</p>
        <button className="mt-4 w-full bg-primary text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
