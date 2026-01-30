import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";   
import cartRoutes from "./routes/cartRoutes.js";   

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Use imported routes
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
