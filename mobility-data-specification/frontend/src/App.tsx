import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StationPage from "@/pages/station/page";
import StationDetails from "./pages/station/stationDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StationPage />} />
        </Routes>
        <Routes>
          <Route path="/stationDetails" element={<StationDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
