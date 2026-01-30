import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/"); 
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/20 backdrop-blur-md border border-white/30 p-10 rounded-2xl shadow-xl w-96 flex flex-col gap-6"
      >
        {/* Close Button */}
        <FaTimes
          className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:text-gray-800"
          size={20}
          onClick={() => navigate("/")}
        />

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        {/* Email Input */}
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:cursor-pointer w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
