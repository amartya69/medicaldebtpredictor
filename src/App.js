import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import Treatments from "./pages/Treatments";
import RiskCalculator from "./pages/RiskCalculator";
import RiskResult from "./pages/RiskResult";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Flow */}
        <Route path="/home" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/treatments" element={<Treatments />} />

        {/* Risk Flow */}
        <Route path="/risk" element={<RiskCalculator />} />
        <Route path="/result" element={<RiskResult />} />

        {/* Support & Dashboard */}
        <Route path="/support" element={<Support />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;