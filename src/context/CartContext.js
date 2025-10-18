// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load from localStorage when app starts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // ✅ Sync changes to localStorage whenever cart updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev; // prevent duplicates
      return [...prev, item];
    });
  };

  // ✅ Remove item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Clear all
  const clearCart = () => setCartItems([]);

  // ✅ Calculate total (extract numbers only)
  const total = cartItems.reduce((sum, item) => {
    const match = item.price.match(/\d+/g); // extract numeric part from ₱750 – ₱1,200
    const numericPrice = match ? parseInt(match[0]) : 0;
    return sum + numericPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Export hook
export const useCart = () => useContext(CartContext);
