import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart, totalAmount } = useContext(CartContext);

  if (!cart.products || cart.products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-center text-3xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
      </div>
    );
  }

  // Total items = sum of quantities
  const totalItems = cart.products.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.products.map((p) => (
            <div
              key={p.productId}
              className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-24 w-24 object-contain p-2 bg-gray-50"
              />
              <div className="ml-4 flex-1 py-4">
                <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                <p className="text-gray-600">
                  Price: ${p.price} × {p.quantity} = ${(p.price * p.quantity).toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() =>
                      removeFromCart(p.productId)
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    −
                  </button>
                  <span className="px-2 font-semibold">{p.quantity}</span>
                  <button
                    onClick={() =>
                      addToCart({ productId: p.productId, title: p.title, price: p.price, image: p.image, quantity: 1 })
                    }
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Panel */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Total Amount:</span>
            <span className="font-semibold">${totalAmount.toFixed(2)}</span>
          </div>
          <button className="hover:cursor-pointer w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
