const mongoose = require("mongoose");
const Hospital = require("./models/hospital");
const data = require("./hospitals.json");

mongoose.connect("mongodb://127.0.0.1:27017/medicalDB")
.then(async () => {
  console.log("MongoDB Connected ✅");

  await Hospital.deleteMany(); // optional (clear old data)

  await Hospital.insertMany(data);

  console.log("🔥 Hospitals inserted!");
  process.exit();
})
.catch(err => console.log(err));