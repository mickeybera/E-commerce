import Cart from "../models/Cart.js";

// Add product to cart
export async function addToCart(req, res) {
  try {
    const userId = req.user.id; 
    const { product } = req.body; 

    
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, products: [product] });
    } else {
      const existing = cart.products.find(
        (p) => p.productId === product.productId
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.products.push(product);
      }
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Remove product from cart
export async function removeFromCart(req, res) {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter((p) => p.productId !== productId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get user's cart
export async function getCart(req, res) {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.json({ products: [] });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
