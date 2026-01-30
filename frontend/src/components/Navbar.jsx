import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiShoppingCart, FiLogIn, FiUserPlus } from "react-icons/fi";

export default function Navbar() {
  const { totalItems } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300`}>
      <div
        className={`
          max-w-7xl mx-auto px-6 py-4 flex justify-between items-center
          rounded-b-xl border
          transition-all duration-300
          ${scrolled 
            ? "bg-white/30 backdrop-blur-md shadow-md border-white/20"
            : "bg-transparent border-transparent shadow-none"}
        `}
      >
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
        >
          E-Shop
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">
          <Link
            to="/cart"
            className="relative flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors duration-200"
          >
            <FiShoppingCart size={20} className="mr-1" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-3 bg-gradient-to-tr from-red-500 to-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors duration-200"
          >
            <FiLogIn size={18} className="mr-1" />
            Login
          </Link>

          <Link
            to="/signup"
            className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <FiUserPlus size={18} className="mr-1" />
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
