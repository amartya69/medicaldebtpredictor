const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Hospital = require("./models/hospital");

const app = express();

// 🔥 Middleware
app.use(cors());
app.use(express.json());

// 🔥 MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/medicalDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// =======================================
// 🔥 RISK PREDICTION API (FIXED)
// =======================================
app.post("/predict", (req, res) => {
  try {
    console.log("🔥 Incoming request:", req.body);
    console.log("📊 Request received at:", new Date());

    const {
      income = 0,
      expenses = 0,
      emi = 0,
      oop = 0,
      savings = 0
    } = req.body;

    const inc = Number(income);
    const exp = Number(expenses);
    const e = Number(emi);
    const outOfPocket = Number(oop);
    const sav = Number(savings);

    const totalBurden = outOfPocket + exp + e;
    const burdenRatio = inc > 0 ? totalBurden / inc : 1;

    const surplus = inc - (exp + e);
    const savingsCover = sav >= outOfPocket;

    let score = 20;

    if (burdenRatio > 0.6) score = 85;
    else if (burdenRatio > 0.4) score = 65;
    else if (burdenRatio > 0.2) score = 40;

    if (surplus < 0) score += 10;
    if (!savingsCover) score += 5;

    if (score > 100) score = 100;

    let risk = "Low";
    if (score > 70) risk = "High";
    else if (score > 40) risk = "Medium";

    let recommendations = [];

    if (risk === "High") {
      recommendations = [
        "Consider government hospitals",
        "Avoid high-interest loans",
        "Explore financial aid"
      ];
    } else if (risk === "Medium") {
      recommendations = [
        "Compare hospital costs",
        "Check insurance coverage"
      ];
    } else {
      recommendations = [
        "You are financially stable",
        "Maintain emergency fund"
      ];
    }

    res.json({
      score,
      risk,
      surplus,
      recommendations
    });

  } catch (err) {
    console.error("❌ ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// =======================================
// 🔥 GET ALL HOSPITALS
// =======================================
app.get("/hospitals", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================================
// 🔥 HOSPITALS BY RISK
// =======================================
app.get("/hospitals-by-risk/:risk", async (req, res) => {
  try {
    const { risk } = req.params;

    let filter = {};

    if (risk === "High") {
      filter.type = "Government";
    } else if (risk === "Medium") {
      filter.type = { $in: ["Government", "Private"] };
    } else {
      filter.type = "Private";
    }

    const hospitals = await Hospital.find(filter).limit(6);

    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});