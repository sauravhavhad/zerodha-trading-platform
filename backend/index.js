require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ==================== MIDDLEWARE ====================

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// ==================== HOME ====================

app.get("/", (req, res) => {
  res.send("Backend is working");
});

// ==================== AUTH ====================

app.use("/api/auth", authRoute);

// ==================== ORDERS ====================

// Add new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "Missing required order fields" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    res.json({
      message: "Order saved successfully",
      order: newOrder,
    });
  } catch (err) {
    console.log("Order error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.log("Orders fetch error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ==================== HOLDINGS ====================

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.log("Holdings error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ==================== POSITIONS ====================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.log("Positions error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ==================== MONGODB ====================

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// ==================== SERVER ====================

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});