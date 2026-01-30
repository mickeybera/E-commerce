import { createContext, useState, useEffect } from "react";
import API from "../services/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });

  // Function to get token dynamically
  const getToken = () => localStorage.getItem("token");

  // Fetch cart from backend
  const fetchCart = async () => {
    const token = getToken();
    if (!token) return;
    try {
      const res = await API.get("/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Add product to cart
  const addToCart = async (product) => {
    const token = getToken();
    if (!token) return alert("Login first");
    try {
      const res = await API.post(
        "/cart/add",
        { product },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Remove product from cart
  const removeFromCart = async (productId) => {
    const token = getToken();
    if (!token) return alert("Login first");
    try {
      const res = await API.post(
        "/cart/remove",
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Whenever login status changes, refetch cart
  useEffect(() => {
    fetchCart();
  }, []); // initial load

  const totalAmount = cart.products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.products.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalAmount, totalItems, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
