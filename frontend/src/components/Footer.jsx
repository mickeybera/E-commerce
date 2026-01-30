import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-white/20 backdrop-blur-md border-t border-white/30 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">E-Shop</h2>
          <p className="text-gray-600">
            Your one-stop shop for the latest products. Quality guaranteed and delivered fast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="/" className="hover:text-gray-800 transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-gray-800 transition-colors">Products</a></li>
            <li><a href="/cart" className="hover:text-gray-800 transition-colors">Cart</a></li>
            <li><a href="/login" className="hover:text-gray-800 transition-colors">Login</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-2">Email: support@eshop.com</p>
          <p className="text-gray-600 mb-2">Phone: +1 234 567 890</p>
          <p className="text-gray-600">Address: 123 E-Shop Street, NY</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-sky-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-white/20">
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
