import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">

      {/* LEFT SIDE */}
      <div className="signup-left">

        <div className="logo">
          <div className="logo-box">⚡</div>
          <h2>MedDebt</h2>
        </div>

        <h1>Start your journey to financial clarity</h1>
        <p>
          Create an account to access all features and start planning your healthcare expenses.
        </p>

        <ul className="features">
          <li>✔ Compare 500+ hospitals across India</li>
          <li>✔ Get accurate cost estimates in INR</li>
          <li>✔ Calculate your financial risk score</li>
          <li>✔ Discover government schemes & NGO support</li>
          <li>✔ Download detailed risk reports</li>
        </ul>

      </div>

      {/* RIGHT SIDE */}
      <div className="signup-right">

        <div>
          <h2>Create an account</h2>
          <p className="subtitle">Enter your details to get started</p>

          <div className="signup-box">

            <label>Full Name</label>
            <input className="input" placeholder="John Doe" />

            <label>Email</label>
            <input className="input" placeholder="you@example.com" />

            <label>Password</label>
            <input type="password" className="input" placeholder="Create a password" />

            <label>Confirm Password</label>
            <input type="password" className="input" placeholder="Confirm your password" />

            <button onClick={() => navigate("/")} className="btn">
              Create an account →
            </button>

            <p className="login-text">
              Already have an account? <Link to="/">Sign In</Link>
            </p>

            <p className="footer">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}