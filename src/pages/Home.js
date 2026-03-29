import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  // 🔹 SEARCH STATE
  const [search, setSearch] = useState("");

  // 🔹 SAME HOSPITAL DATA (IMPORTANT)
  const hospitalData = [
    {
      id: 1,
      name: "AIIMS Delhi",
      city: "Delhi",
      type: "Government",
      rating: 4.8,
      treatments: ["Heart Surgery", "Cancer Treatment"],
    },
    {
      id: 2,
      name: "Apollo Hospital",
      city: "Delhi",
      type: "Private",
      rating: 4.5,
      treatments: ["Orthopedic", "Kidney Transplant"],
    },
    {
      id: 3,
      name: "Fortis Hospital",
      city: "Mumbai",
      type: "Private",
      rating: 4.4,
      treatments: ["Cardiology", "Neurology"],
    },
  ];

  // 🔹 HANDLE SEARCH (UPDATED ✅)
  const handleSearch = () => {
    const term = search.toLowerCase().trim();

    const filtered = hospitalData.filter((hospital) => {
      return (
        hospital.name.toLowerCase().includes(term) ||
        hospital.city.toLowerCase().includes(term) ||
        hospital.treatments.some((t) =>
          t.toLowerCase().includes(term)
        )
      );
    });

    // ✅ FIX: STOP IF NO RESULT
    if (filtered.length === 0) {
      alert("❌ No hospitals found for your search");
      return;
    }

    // ✅ NAVIGATE ONLY IF RESULT EXISTS
    navigate("/hospitals", { state: filtered });
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    textAlign: "left",
  };

  const iconStyle = {
    background: "#e5e7eb",
    padding: "10px",
    borderRadius: "10px",
    display: "inline-block",
    marginBottom: "10px",
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        style={{
          background: "#f8fafc",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#e0f2f1",
            color: "#0f766e",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          🛡 Trusted by 10,000+ patients across India
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#111827",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Predict Your Medical Financial Risk
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginTop: "16px",
            fontSize: "18px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Make informed healthcare decisions. Compare hospital costs,
          calculate financial risk, and discover support schemes before your
          treatment.
        </p>

        {/* SEARCH BAR */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hospitals, treatments, or city..."
            style={{
              width: "400px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              background: "#0d9488",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Search →
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          <span>🏥 500+ Hospitals</span>
          <span>📈 Estimate Costs</span>
          <span>🛡 Find Schemes</span>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "700" }}>
          How We Help You Plan
        </h2>

        <p style={{ color: "#6b7280", marginTop: "10px" }}>
          Our platform provides comprehensive tools to help you make informed
          healthcare decisions without financial stress.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={cardStyle}>
            <div style={iconStyle}>🏥</div>
            <h3>Compare Hospitals</h3>
            <p>
              View and compare treatment costs across different hospitals in
              your area
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>📊</div>
            <h3>Estimate Costs</h3>
            <p>
              Get detailed cost breakdowns for treatments including surgery,
              stay, and medications
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>📉</div>
            <h3 style={{ color: "#0d9488" }}>Predict Risk</h3>
            <p>
              Calculate your financial risk score based on income, savings,
              and treatment costs
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>💛</div>
            <h3>Find Schemes</h3>
            <p>
              Discover government schemes and NGO support you may be eligible
              for
            </p>
          </div>
        </div>
      </div>
    </>
  );
}