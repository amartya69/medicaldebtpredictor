import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Hospitals() {
  const navigate = useNavigate();

  const [hospitals, setHospitals] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("none");

  // 🔥 FETCH DATA
  useEffect(() => {
    fetch("http://localhost:5000/hospitals")
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 Hospitals fetched:", data.length);
        setHospitals(data); // ✅ NO LIMIT
      })
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  // 🧠 GET UNIQUE CITIES (DYNAMIC)
  const cities = ["All", ...new Set(hospitals.map((h) => h.location))];

  // 🔍 FILTER + SEARCH (SAFE)
  let filtered = hospitals.filter((h) => {
    const name = h.name || "";
    const location = h.location || "";
    const treatments = h.treatments || [];

    const matchSearch =
      name.toLowerCase().includes(search.toLowerCase()) ||
      location.toLowerCase().includes(search.toLowerCase()) ||
      treatments.some((t) =>
        (t.name || "").toLowerCase().includes(search.toLowerCase())
      );

    const matchCity = city === "All" || location === city;
    const matchType = type === "All" || h.type === type;

    return matchSearch && matchCity && matchType;
  });

  // 📊 SORTING
  if (sort === "cost") {
    filtered.sort((a, b) => {
      const costA = a.treatments?.[0]?.cost || 0;
      const costB = b.treatments?.[0]?.cost || 0;
      return costA - costB;
    });
  }

  return (
    <>
      <Navbar />

      <div style={{ background: "#f8fafc", minHeight: "100vh", padding: "40px" }}>
        
        <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
          🏥 Find Hospitals in India
        </h1>

        {/* 🔍 SEARCH + FILTER */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
          
          <input
            placeholder="Search hospital, city, treatment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd"
            }}
          />

          {/* CITY (DYNAMIC) */}
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>

          {/* TYPE */}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>All</option>
            <option>Private</option>
            <option>Government</option>
          </select>

          {/* SORT */}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Sort</option>
            <option value="cost">Lowest Cost</option>
          </select>
        </div>

        {/* COUNT */}
        <p style={{ marginTop: "20px", fontWeight: "600" }}>
          {filtered.length} hospitals found
        </p>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {filtered.map((h) => (
            <div key={h._id} style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              
              <h3>{h.name}</h3>

              <p>📍 {h.location}</p>

              <span style={{
                background: h.type === "Private" ? "#0d9488" : "#22c55e",
                color: "white",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px"
              }}>
                {h.type}
              </span>

              <p style={{ marginTop: "10px" }}>
                ⭐ {h.rating || "4.5"} • 🏥 500+ beds
              </p>

              {/* TREATMENTS */}
              <div style={{ marginTop: "10px" }}>
                {h.treatments?.slice(0, 3).map((t, i) => (
                  <span key={i} style={{
                    marginRight: "6px",
                    background: "#f1f5f9",
                    padding: "4px 10px",
                    borderRadius: "10px",
                    fontSize: "12px"
                  }}>
                    {t.name}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate("/treatments", { state: h })}
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  cursor: "pointer"
                }}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}