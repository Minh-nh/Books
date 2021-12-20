import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Cors from 'cors';
import bodyParser from "body-parser"

// import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// import trademarkRoutes from "./routes/trademarkRoutes.js";
// import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// Kết nối đến server
connectDB();

const app = express();

app.use(express.json())

app.use(bodyParser.json())

app.use(Cors());

// cái này để test server lúc đầu thôi
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Dùng route ở đây
// app.use("/api/orders", orderRoutes)
app.use("/api/products", productRoutes)
// app.use("/api/trademarks", trademarkRoutes)
// app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
