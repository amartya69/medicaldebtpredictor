import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🎯 Active link style
  const getLinkStyle = (path) => ({
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    color: location.pathname === path ? "#0d9488" : "#6b7280",
    transition: "all 0.2s ease",
    position: "relative",
  });

  return (
    <nav
      style={{
        background: "white",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT (LOGO) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/home")}
        >
          <div
            style={{
              background: "#0d9488",
              color: "white",
              padding: "8px",
              borderRadius: "10px",
              fontSize: "14px",
              transition: "0.3s",
            }}
          >
            💓
          </div>

          <h1
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#1f2937",
            }}
          >
            MedDebt
          </h1>
        </div>

        {/* CENTER NAV LINKS */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Link to="/home" style={getLinkStyle("/home")}>
            Home
          </Link>

          <Link to="/hospitals" style={getLinkStyle("/hospitals")}>
            Hospitals
          </Link>

          <Link to="/risk" style={getLinkStyle("/risk")}>
            Risk Calculator
          </Link>

          <Link to="/support" style={getLinkStyle("/support")}>
            Support Options
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            🌐 EN
          </span>

          {/* Sign In */}
          <button
            onClick={() => navigate("/")}
            style={{
              background: "transparent",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              fontWeight: "500",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d9488")}
            onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
          >
            Sign In
          </button>

          {/* CTA BUTTON */}
          <button
            onClick={() => navigate("/signup")}
            style={{
              background: "#0d9488",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(13,148,136,0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}