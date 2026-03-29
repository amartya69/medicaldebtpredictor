import Navbar from "../components/Navbar";
import TreatmentCard from "../components/TreatmentCard";
import { useLocation, useNavigate } from "react-router-dom";

export default function Treatments() {
  const { state } = useLocation(); // selected hospital
  const navigate = useNavigate();

  const card = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const treatmentCard = {
  ...card,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "15px"
};

const btn = {
  marginTop: "8px",
  background: "#0d9488",
  color: "white",
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer"
};

  // 🔥 Dummy Treatments (replace later with API)
const treatments = [
  {
    id: 1,
    name: "Coronary Bypass Surgery",
    cost: "₹3,50,000",
    range: "₹2,50,000 - ₹5,00,000",
    insurance: "Insurance Accepted",
    duration: "7-10 days",
  },
  {
    id: 2,
    name: "Knee Replacement",
    cost: "₹2,80,000",
    range: "₹2,00,000 - ₹4,00,000",
    insurance: "Insurance Accepted",
    duration: "5-7 days",
  },
  {
    id: 3,
    name: "Hip Replacement",
    cost: "₹3,00,000",
    range: "₹2,20,000 - ₹4,50,000",
    insurance: "Insurance Accepted",
    duration: "5-7 days",
  },
];

return (
  <>
    <Navbar />

    <div style={{
      background: "#f5f7fa",
      minHeight: "100vh",
      padding: "40px"
    }}>

      {/* BACK */}
      <div
        onClick={() => navigate("/hospitals")}
        style={{ color: "#6b7280", cursor: "pointer", marginBottom: "20px" }}
      >
        ← Back to Hospitals
      </div>

      {/* HEADER */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
          {state?.name || "Apollo Hospitals"}
          <span style={{
            marginLeft: "10px",
            background: "#0d9488",
            color: "white",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "12px"
          }}>
            {state?.type || "Private"}
          </span>
        </h1>

        <p style={{ color: "#6b7280", marginTop: "10px" }}>
          📍 {state?.city || "Delhi"}, India ⭐ 4.8 • 🏥 710 beds • ✔ accredited
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "25px"
      }}>

        {/* LEFT SIDE */}
        <div>

          {/* ABOUT */}
          <div style={card}>
            <h3 style={{ marginBottom: "10px" }}>About Hospital</h3>
            <p style={{ color: "#6b7280" }}>
              Apollo Hospitals is a multi-specialty hospital known for advanced
              medical technology and experienced professionals.
            </p>

            <div style={{ marginTop: "15px" }}>
              <p><b>Address:</b> Delhi, India</p>
              <p><b>Phone:</b> +91 9876543210</p>
            </div>
          </div>

          {/* TITLE */}
          <h2 style={{ marginTop: "25px", marginBottom: "10px" }}>
            🩺 Available Treatments
          </h2>

          {/* TREATMENT LIST */}
          {treatments.map((t) => (
            <div key={t.id} style={treatmentCard}>

              {/* LEFT */}
              <div>
                <h3>{t.name}</h3>
                <p style={{ color: "#6b7280", fontSize: "14px" }}>
                  ⏱ {t.duration} • 🛡 {t.insurance}
                </p>
              </div>

              {/* RIGHT */}
              <div style={{ textAlign: "right" }}>
                <h2 style={{ color: "#0d9488" }}>{t.cost}</h2>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>
                  Cost Range: {t.range}
                </p>

                <button
                  onClick={() => navigate("/risk", { state: t })}
                  style={btn}
                >
                  Check Financial Risk
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div style={card}>

          <h3 style={{ marginBottom: "15px" }}>ℹ Important Information</h3>

          <div style={{ color: "#6b7280", fontSize: "14px" }}>
            <h4>Cost Disclaimer</h4>
            <p>
              Costs are estimates and may vary based on conditions and room type.
            </p>

            <h4 style={{ marginTop: "15px" }}>Government Schemes</h4>
            <p>
              Covered under Ayushman Bharat / PM-JAY if eligible.
            </p>

            <h4 style={{ marginTop: "15px" }}>Insurance</h4>
            <p>
              Most major insurance providers are accepted.
            </p>
          </div>

          <button style={{ ...btn, width: "100%", marginTop: "20px" }}>
            View Financial Support
          </button>
        </div>

      </div>
    </div>
  </>
);
}