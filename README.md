# 💊 MedDebt Predictor

A smart healthcare financial assistant that helps users **predict medical debt risk**, **compare hospitals**, and make **better financial decisions before treatment**.

---

## 🚀 Live Features

- 🧠 AI-based **Risk Prediction**
- 🏥 **Hospital Finder (50+ hospitals)**
- 💰 Financial analysis (income, EMI, expenses)
- 📊 Risk Score (Low / Medium / High)
- 💡 Smart Recommendations
- 🖨 Download & Print Report
- 🎯 Hospital suggestions based on risk

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Chart.js

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Compass)

---

## 📸 Screenshots

### 🔹 Risk Calculator
![Risk Calculator](https://via.placeholder.com/800x400)

### 🔹 Results Page
![Results](https://via.placeholder.com/800x400)

### 🔹 Hospitals Page
![Hospitals](https://via.placeholder.com/800x400)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/amartya69/medicaldebtpredictor.git
cd medicaldebtpredictor


Backend Setup
cd backend
npm install
npm run dev

👉 Runs on: http://localhost:5000

Frontend Setup
cd ..
npm install
npm start

👉 Runs on: http://localhost:3000

MongoDB Setup
Open MongoDB Compass
Create DB: medicalDB
Collection: hospitals
Insert dataset (50+ hospitals)

API Endpoints
Method	Endpoint	Description
POST	/predict	Calculate risk
GET	/hospitals	Get all hospitals
GET	/hospitals-by-risk/:risk	Filter hospitals

🧠 How It Works
User enters:
Income
Expenses
EMI
Medical Cost
Savings
Backend calculates:
Burden Ratio
Surplus
Risk Score
System returns:
Risk Level
Recommendations
Suggested Hospitals

Use Case

Helps patients avoid medical debt traps
Suggests affordable hospitals
Supports financial planning before treatment
