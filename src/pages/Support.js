import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

export default function Support() {
  const { state } = useLocation();

  // Default (in case user comes directly)
  const riskLevel = state?.riskLevel || "Low";

  const isHighRisk =
    riskLevel === "High" || riskLevel === "Very High";

    const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const grid2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px"
};

const grid3 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px"
};

const btn = {
  marginTop: "10px",
  padding: "6px 12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background: "#f9fafb",
  cursor: "pointer"
};

const highlight = {
  color: "#0d9488",
  fontWeight: "600"
};

  return (
  <>
    <Navbar />

    <div style={{ background: "#f5f7fa", minHeight: "100vh", padding: "40px" }}>

      {/* HEADER */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
          Financial Support Options
        </h1>
        <p style={{ color: "#6b7280" }}>
          Discover government schemes, NGO funds, and EMI options
        </p>
      </div>

      {/* 🔷 GOVERNMENT SCHEMES */}
      <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
        🏥 Government Health Schemes
      </h2>

      <div style={grid2}>
        {/* CARD 1 */}
        <div style={card}>
          <h3>Ayushman Bharat - PMJAY</h3>
          <p style={highlight}>₹ Coverage: ₹5,00,000</p>
          <p>
            Provides health coverage up to ₹5 lakhs per family per year.
          </p>
          <p><b>Eligibility:</b> Bottom 40% families</p>
          <ul>
            <li>✔ Cashless treatment</li>
            <li>✔ Covers 1300+ procedures</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div style={card}>
          <h3>CGHS (Central Govt Scheme)</h3>
          <p style={highlight}>₹ Coverage: Varies</p>
          <p>
            Healthcare for central govt employees & pensioners.
          </p>
          <ul>
            <li>✔ OPD/IPD Coverage</li>
            <li>✔ Diagnostic Tests</li>
          </ul>
        </div>
      </div>

      {/* 🔷 NGO SUPPORT */}
      <h2 style={{ fontSize: "20px", margin: "30px 0 15px" }}>
        ❤️ NGO Medical Funds
      </h2>

      <div style={grid3}>
        <div style={card}>
          <h3>Indian Cancer Society</h3>
          <p>Financial help for cancer patients</p>
          <button style={btn}>Visit</button>
        </div>

        <div style={card}>
          <h3>HelpAge India</h3>
          <p>Support for elderly healthcare</p>
          <button style={btn}>Visit</button>
        </div>

        <div style={card}>
          <h3>Give India</h3>
          <p>Connects donors with patients</p>
          <button style={btn}>Visit</button>
        </div>
      </div>

      {/* 🔷 CROWDFUNDING */}
      <h2 style={{ fontSize: "20px", margin: "30px 0 15px" }}>
        🌍 Crowdfunding Platforms
      </h2>

      <div style={grid3}>
        <div style={card}>
          <h3>Ketto</h3>
          <p>India’s largest crowdfunding platform</p>
          <button style={btn}>Visit</button>
        </div>

        <div style={card}>
          <h3>Milaap</h3>
          <p>Fundraising for medical treatments</p>
          <button style={btn}>Visit</button>
        </div>

        <div style={card}>
          <h3>ImpactGuru</h3>
          <p>Hospital-linked crowdfunding support</p>
          <button style={btn}>Visit</button>
        </div>
      </div>

      {/* 🔷 EMI / LOANS */}
      <h2 style={{ fontSize: "20px", margin: "30px 0 15px" }}>
        💳 EMI & Loan Options
      </h2>

      <div style={grid3}>
        <div style={card}>
          <h3>Bajaj Finserv Health EMI</h3>
          <p>No-cost EMI for treatments</p>
          <button style={btn}>Visit</button>
        </div>

        <div style={card}>
          <h3>HDFC Medical Loan</h3>
          <p>Quick personal medical loans</p>
          <button style={btn}>Visit</button>
        </div>

        <div style={card}>
          <h3>Tata Capital Medical Loan</h3>
          <p>Flexible tenure & low interest</p>
          <button style={btn}>Visit</button>
        </div>
      </div>

    </div>
  </>
);
}