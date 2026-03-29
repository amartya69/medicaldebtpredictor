import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RiskCalculator() {
  const { state } = useLocation(); // optional
  const navigate = useNavigate();

  const [form, setForm] = useState({
    income: "",
    expenses: "",
    emi: "",
    savings: "",
    oop: ""
  });

  const [loading, setLoading] = useState(false);

  const inputStyle = {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginBottom: "10px",
    width: "100%"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ if treatment exists → auto cost
  const treatmentCost = state?.cost || 0;

  const oop = state
    ? Math.max(1000, treatmentCost - Number(form.savings || 0))
    : Number(form.oop || 0);

  const handleSubmit = async () => {
    console.log("🔥 BUTTON CLICKED");

    try {
      setLoading(true);

      const payload = {
        income: Number(form.income || 0),
        expenses: Number(form.expenses || 0),
        emi: Number(form.emi || 0),
        savings: Number(form.savings || 0),
        oop: Number(oop)
      };

      console.log("🚀 Sending:", payload);

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      console.log("✅ RESPONSE:", data);

      navigate("/result", {
        state: {
          ...data,
          oop,
          form,
          treatment: state || null
        }
      });

    } catch (err) {
      console.error("❌ ERROR:", err);
      alert("Backend not responding!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", background: "#f5f7fa", minHeight: "100vh" }}>
        <h1>📟 Risk Calculator</h1>

        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "500px",
          margin: "auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>

          {/* ✅ OPTIONAL TREATMENT DISPLAY */}
          {state && (
            <>
              <p><b>Treatment:</b> {state.name}</p>
              <p><b>Cost:</b> ₹ {treatmentCost}</p>
              <hr />
            </>
          )}

          {/* INPUTS */}
          <input name="income" placeholder="Monthly Income ₹" onChange={handleChange} style={inputStyle} />
          <input name="expenses" placeholder="Monthly Expenses ₹" onChange={handleChange} style={inputStyle} />
          <input name="emi" placeholder="EMI ₹" onChange={handleChange} style={inputStyle} />
          <input name="savings" placeholder="Savings ₹" onChange={handleChange} style={inputStyle} />

          {/* ✅ IF NO TREATMENT → ASK OOP */}
          {!state && (
            <input
              name="oop"
              placeholder="Treatment Cost (Out of Pocket ₹)"
              onChange={handleChange}
              style={inputStyle}
            />
          )}

          {/* SHOW OOP */}
          <p><b>Out-of-pocket:</b> ₹ {oop}</p>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              marginTop: "20px",
              background: "#0d9488",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "Calculating..." : "Calculate Risk →"}
          </button>
        </div>
      </div>
    </>
  );
}