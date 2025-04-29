import express from "express";
import connectDB from "./config/mongodb.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import cookieParser from "cookie-parser";

import menuRoutes from "./routes/menuRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { connectPostgresDB } from "./config/postgresSql.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/menu", menuRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

app.listen(PORT, () => {
  connectDB();
  connectPostgresDB();
  console.log("Server is running on port 3000");
});
