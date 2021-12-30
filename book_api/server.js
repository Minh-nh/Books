import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Cors from 'cors';
import bodyParser from "body-parser"

import productRoutes from "./routes/productRoutes.js";
import librarianRoutes from "./routes/librarianRoutes.js"
import pubshingHouseRoutes from "./routes/publishingHouseRoutes.js"
import authorRoutes from "./routes/authorRoutes.js"
import borrowedTicketRoutes from "./routes/borrowedTicketRoutes.js"

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
app.use("/api/products", productRoutes)
app.use("/api/librarians", librarianRoutes)
app.use("/api/publishing_houses", pubshingHouseRoutes)
app.use("/api/authors", authorRoutes)
app.use("/api/borrowed_ticketes", borrowedTicketRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
