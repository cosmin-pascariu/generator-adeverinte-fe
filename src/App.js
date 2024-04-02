import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import "./App.css";
import RequestsList from "./pages/requests-list/RequestsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/requests-list" element={<RequestsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
