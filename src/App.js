import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import "./App.css";
import Archives from "./pages/archives/Archives";
import Requests from "./pages/requests-list/Requests";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/home" element={<Requests />} />
          <Route path="/requests-list" element={<Home />} />
          <Route path="/arhiva" element={<Archives />} />
          <Route path="/students" element={<Archives />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
