import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// ✅ Register Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function RiskResult() {
  const { state } = useLocation();

  // ✅ State
  const [data, setData] = useState({
    score: 20,
    risk: "Low",
    recommendations: [],
    oop: 0,
    surplus: 0,
    form: {},
    treatment: {}
  });

  const [hospitals, setHospitals] = useState([]);

  // ✅ Load data
  useEffect(() => {
    if (state) setData(state);
  }, [state]);

  const { score, risk, recommendations, oop, surplus, form, treatment } = data;

  // ✅ Fetch hospitals by risk
  useEffect(() => {
    if (!risk) return;

    fetch(`http://localhost:5000/hospitals-by-risk/${risk}`)
      .then(res => res.json())
      .then(setHospitals)
      .catch(console.error);
  }, [risk]);

  // 🎨 Background color
  const bgColor =
    risk === "Low"
      ? "#d1fae5"
      : risk === "Medium"
      ? "#fef3c7"
      : "#fee2e2";

  // 📊 Chart data
  const savings = Number(form?.savings || 0);
  const insurance = Number((treatment?.cost || 0) * 0.2);
  const loan = Math.max(0, oop - savings);

  const pieData = {
    labels: ["Savings", "Insurance", "Loan"],
    datasets: [
      {
        data:
          savings === 0 && insurance === 0 && loan === 0
            ? [1, 1, 1]
            : [savings, insurance, loan],
        backgroundColor: ["#10b981", "#06b6d4", "#ef4444"]
      }
    ]
  };

  // 🖨 PRINT
  const handlePrint = () => {
    window.print();
  };

  // 📄 DOWNLOAD PDF
  const handleDownload = async () => {
    const element = document.getElementById("report");

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Medical_Risk_Report.pdf");
  };

  return (
    <>
      <Navbar />

      <div
        id="report"
        style={{
          padding: "40px",
          background: "#f5f7fa",
          minHeight: "100vh"
        }}
      >
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1>🚀 AI-Powered Risk Assessment</h1>
            <p style={{ color: "#6b7280" }}>
              Smart prediction of your medical financial risk
            </p>
          </div>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={handlePrint} style={btnLight}>
              🖨 Print
            </button>

            <button onClick={handleDownload} style={btnPrimary}>
              📄 Download Report
            </button>
          </div>
        </div>

        {/* TOP CARD */}
        <div style={{ ...card, marginTop: "20px", background: bgColor }}>
          <h3>{treatment?.name || "Treatment"}</h3>
          <p>{treatment?.hospital || "Hospital"}</p>
          <h2>₹ {treatment?.cost || 0}</h2>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {/* GAUGE */}
          <div style={card}>
            <h3>Risk Score</h3>

            <GaugeChart
              id="gauge"
              percent={score / 100}
              colors={["#10b981", "#f59e0b", "#ef4444"]}
            />

            <h2>{score}%</h2>
            <p>{risk} Risk</p>
          </div>

          {/* PIE */}
          <div style={card}>
            <h3>Cost Breakdown</h3>

            <div style={{ width: "250px", height: "250px" }}>
              <Doughnut key={JSON.stringify(pieData)} data={pieData} />
            </div>
          </div>

          {/* RECOMMEND */}
          <div style={card}>
            <h3>Recommendations</h3>

            {recommendations.map((r, i) => (
              <p key={i}>✔ {r}</p>
            ))}
          </div>
        </div>

        {/* SUMMARY */}
        <div style={{ ...card, marginTop: "20px" }}>
          <h3>Financial Summary</h3>
          <p>Out-of-Pocket: ₹ {oop}</p>
          <p>Monthly Surplus: ₹ {surplus}</p>
          <p>Savings: ₹ {form?.savings || 0}</p>
        </div>

        {/* HOSPITALS */}
        <div style={{ marginTop: "30px" }}>
          <h2>🏥 Suggested Hospitals</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "15px"
            }}
          >
            {hospitals.map((h, i) => (
              <div key={i} style={card}>
                <h3>{h.name}</h3>
                <p>📍 {h.location}</p>
                <p>🏷 {h.type}</p>

                {h.treatments.slice(0, 2).map((t, idx) => (
                  <span key={idx} style={tag}>
                    {t.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// 🎨 Styles
const card = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const tag = {
  background: "#e5e7eb",
  padding: "5px 10px",
  borderRadius: "10px",
  marginRight: "5px",
  fontSize: "12px"
};

const btnPrimary = {
  background: "#0d9488",
  color: "white",
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer"
};

const btnLight = {
  background: "#e5e7eb",
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer"
};