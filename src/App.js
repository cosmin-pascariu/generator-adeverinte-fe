import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import "./App.css";
import Archives from "./pages/archives/Archives";
import Requests from "./pages/requests-list/Requests";
import { PaginaNegasita } from "./pages/notFound/PaginaNegasita";

function App() {
  const isAuthenticated = () => {
    const userName = localStorage.getItem("userName");
    return !!userName;
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/requests-list"
            element={
              <PrivateRoute>
                <Requests />
              </PrivateRoute>
            }
          />
          <Route
            path="/arhiva"
            element={
              <PrivateRoute>
                <Archives />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PaginaNegasita />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
