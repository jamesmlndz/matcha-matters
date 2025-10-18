import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFilled = Object.values(form).every((v) => v.trim() !== "");
    if (!allFilled) {
      alert("Please fill out all shipping and payment details.");
      return;
    }

    // Simulate saving order
    const orderData = {
      id: Date.now(),
      customer: form,
      items: cartItems,
      total,
    };

    console.log("✅ Order Placed:", orderData);

    clearCart(); // Clear cart after purchase
    navigate("/order-success", { state: { order: orderData } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <p className="text-2xl text-gray-600 mb-4">Your cart is empty 😔</p>
        <Link
          to="/shop"
          className="bg-[#3C75B5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#718355] transition-all"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-40 pb-24 bg-[#FAFAF8] min-h-screen px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-10 rounded-2xl shadow-lg">
        {/* Shipping Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#3C75B5] mb-6">
            Shipping & Payment
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={form.postalCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />

            {/* Payment Method */}
            <div>
              <label className="block mb-2 font-semibold text-[#3C75B5]">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit Card">Credit Card</option>
                <option value="GCash">GCash</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F7DF52] text-[#3C75B5] py-3 rounded-full font-semibold text-lg hover:bg-[#718355] hover:text-white transition-all duration-300 shadow-md"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-3xl font-bold text-[#3C75B5] mb-6">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border"
                  />
                  <div>
                    <p className="font-semibold text-[#3C75B5]">{item.name}</p>
                    <p className="text-[#718355]">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-4 flex justify-between text-xl font-semibold text-[#3C75B5]">
            <span>Total:</span>
            <span>₱{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
