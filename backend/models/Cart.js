import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: Number,
      title: String,
      price: Number,
      image: String,
      quantity: { type: Number, default: 1 },
    },
  ],
});

export default model("Cart", cartSchema);
