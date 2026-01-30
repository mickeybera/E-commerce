import { Router } from "express";
const router = Router();
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get("/", protect, getCart);
router.post("/add", protect, addToCart);
router.post("/remove", protect, removeFromCart);

export default router;
