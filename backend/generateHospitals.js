const fs = require("fs");

const cities = ["Delhi","Mumbai","Chennai","Bangalore","Hyderabad","Pune"];

const hospitals = [];

for (let i = 1; i <= 100; i++) {
  hospitals.push({
    name: `CityCare Hospital ${i}`,
    location: cities[i % cities.length],
    type: i % 2 === 0 ? "Private" : "Government",
    treatments: [
      { name: "General Surgery", cost: 20000 },
      { name: "MRI Scan", cost: 8000 }
    ]
  });
}

fs.writeFileSync("hospitals.json", JSON.stringify(hospitals, null, 2));

console.log("✅ hospitals.json created");