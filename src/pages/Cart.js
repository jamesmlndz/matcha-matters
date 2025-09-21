import React from "react";

export default function Cart() {
  // Sample cart items (you can replace with dynamic data later)
  const cartItems = [
    {
      id: 1,
      name: "Matcha Starter Kit",
      price: 29.99,
      img: "https://source.unsplash.com/100x100/?matcha,tea,kit",
    },
    {
      id: 2,
      name: "Premium Ceremonial Matcha",
      price: 19.99,
      img: "https://source.unsplash.com/100x100/?matcha,tea,powder",
    },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-secondary mb-12">
        Your Cart
      </h2>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-secondary">{item.name}</h3>
                <p className="text-accent mt-1">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <button className="mt-2 md:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Remove
            </button>
          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between font-semibold text-lg text-secondary mt-6 border-t pt-4">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>

        {/* Checkout Button */}
        <button className="mt-6 w-full px-6 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}
