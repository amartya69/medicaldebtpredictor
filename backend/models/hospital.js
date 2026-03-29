const mongoose = require("mongoose");

// 🔹 Treatment Schema
const treatmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

// 🔹 Hospital Schema
const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["Government", "Private"],
      required: true
    },

    // ⭐ NEW FIELDS (for UI upgrade)
    rating: {
      type: Number,
      default: 4.5
    },
    beds: {
      type: Number,
      default: 500
    },

    // 💊 Treatments
    treatments: [treatmentSchema]
  },
  {
    timestamps: true // adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("Hospital", hospitalSchema);