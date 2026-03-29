import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
  <div className="login-container">

    {/* LEFT */}
    <div className="login-left">
      <div className="login-box">

        <div className="logo">
          <div className="logo-box">⚡</div>
          <h3>MedDebt</h3>
        </div>

        <h2 className="title">Welcome back</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <label>Email</label>
        <input className="input" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" className="input" placeholder="Enter your password" />

        <button onClick={() => navigate("/home")} className="btn">
          Sign In →
        </button>

        <p style={{ marginTop: "15px" }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>

    {/* RIGHT */}
    <div className="login-right">

      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">
          <div className="card-icon">❤️</div>
          <h4>Healthcare First</h4>
          <p>Focus on your health, we handle the finances</p>
        </div>

        <div className="card">
          <div className="card-icon">🛡️</div>
          <h4>Secure & Private</h4>
          <p>Your data is protected with enterprise security</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">👥</div>
        <h4>Trusted by Thousands</h4>
        <p>Join 10,000+ patients who have planned their expenses</p>
      </div>

      <p className="footer-text">
        Make informed healthcare decisions with accurate cost predictions.
      </p>

    </div>

  </div>
);
}