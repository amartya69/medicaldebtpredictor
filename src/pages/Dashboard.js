import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const { state } = useLocation();

  // fallback (if opened directly)
  const data = state || {};

  const score = data.score || 60;
  const riskLevel = data.riskLevel || "Medium";
  const oop = data.oop || 200000;
  const income = data.form?.income || 50000;
  const expenses = data.form?.expenses || 20000;
  const emi = data.form?.emi || 10000;

  // 🔹 Financial Burden Ratio
  const burdenRatio = oop / (income * 12);

  // 🔹 Simple Gauge Color Logic
  const getColor = () => {
    if (score < 30) return "bg-green-500";
    if (score < 60) return "bg-yellow-500";
    if (score < 80) return "bg-orange-500";
    return "bg-red-600";
  };

  return (
    <>
      <Navbar />

      <div className="bg-blue-50 min-h-screen p-6">

        <h2 className="text-2xl font-bold text-blue-700">
          Final Risk Dashboard
        </h2>

        {/* 🔹 Risk Score Gauge */}
        <div className="bg-white p-5 mt-4 rounded shadow">
          <h3 className="font-bold mb-2">Risk Score</h3>

          <div className="w-full bg-gray-200 rounded h-6">
            <div
              className={`${getColor()} h-6 rounded text-white text-center`}
              style={{ width: `${score}%` }}
            >
              {score}%
            </div>
          </div>

          <p className="mt-2 font-semibold">
            Risk Level: {riskLevel}
          </p>
        </div>

        {/* 🔹 Financial Burden */}
        <div className="bg-white p-5 mt-4 rounded shadow">
          <h3 className="font-bold">Financial Burden Ratio</h3>
          <p className="mt-2">
            {(burdenRatio * 100).toFixed(2)}% of annual income
          </p>
        </div>

        {/* 🔹 Cost Breakdown */}
        <div className="bg-white p-5 mt-4 rounded shadow">
          <h3 className="font-bold mb-2">Treatment Cost Breakdown</h3>

          <p>Monthly Income: ₹ {income}</p>
          <p>Monthly Expenses: ₹ {expenses}</p>
          <p>EMI: ₹ {emi}</p>
          <p className="font-semibold mt-2">
            Out-of-Pocket Cost: ₹ {oop}
          </p>
        </div>

        {/* 🔹 Recommendations */}
        <div className="bg-white p-5 mt-4 rounded shadow">
          <h3 className="font-bold mb-2 text-green-600">
            Personalized Recommendations
          </h3>

          <ul className="text-gray-700 space-y-1">
            {riskLevel === "Very High" && (
              <>
                <li>• Apply for government schemes (Ayushman Bharat)</li>
                <li>• Consider NGO or crowdfunding support</li>
                <li>• Avoid private hospitals if possible</li>
              </>
            )}

            {riskLevel === "High" && (
              <>
                <li>• Use insurance coverage effectively</li>
                <li>• Plan EMI or loan options</li>
              </>
            )}

            {riskLevel === "Medium" && (
              <li>• Manage expenses and use savings wisely</li>
            )}

            {riskLevel === "Low" && (
              <li>• You are financially stable for this treatment</li>
            )}
          </ul>
        </div>

        {/* 🔹 Download Button */}
        <div className="mt-6">
          <button
            onClick={() => alert("Report Downloaded (Demo)")}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Download Report
          </button>
        </div>

      </div>
    </>
  );
}