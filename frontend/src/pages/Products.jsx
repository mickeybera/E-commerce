import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const getQuantity = (productId) => {
    const item = cart.products.find((p) => p.productId === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => {
          const quantity = getQuantity(p.id);

          return (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex justify-center items-center h-48 p-4 bg-gray-50">
                <img
                  src={p.image}
                  alt={p.title}
                  className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">₹{p.price.toFixed(2)}</p>

                {quantity === 0 ? (
                  <button
                    onClick={() =>
                      addToCart({
                        productId: p.id,
                        title: p.title,
                        price: p.price,
                        image: p.image,
                        quantity: 1,
                      })
                    }
                    className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow hover:shadow-lg"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between mt-auto bg-gray-100 border rounded-lg overflow-hidden shadow-inner">
                    <button
                      onClick={() => removeFromCart(p.id)}
                      className="px-4 py-2 bg-red-500 text-white font-bold rounded-l-lg hover:bg-red-600 transition-transform duration-200 hover:scale-110"
                    >
                      −
                    </button>
                    <span className="px-6 font-semibold text-gray-800">{quantity}</span>
                    <button
                      onClick={() =>
                        addToCart({
                          productId: p.id,
                          title: p.title,
                          price: p.price,
                          image: p.image,
                          quantity: 1,
                        })
                      }
                      className="px-4 py-2 bg-green-500 text-white font-bold rounded-r-lg hover:bg-green-600 transition-transform duration-200 hover:scale-110"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

