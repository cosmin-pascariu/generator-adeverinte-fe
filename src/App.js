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
import { useSelector } from "react-redux";
import Profile from "./pages/profile/Profile";
import FacultyPage from "./pages/faculty/Faculty";
import SecretariesPage from "./pages/secretaries/Secretaries";

function App() {
  const { userName } = useSelector((state) => state.user);

  const isAuthenticated = () => {
    const item = localStorage.getItem("userName");
    return !!item || !!userName;
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  };

  const isAdmin = () => {
    const item = localStorage.getItem("userRole");
    return item === "admin";
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAdmin() && (
            <Route
              path="/profil"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          )}
          {isAdmin() && (
            <Route
              path="/facultate"
              element={
                <PrivateRoute>
                  <FacultyPage />
                </PrivateRoute>
              }
            />
          )}
          {isAdmin() && (
            <Route
              path="/secretari"
              element={
                <PrivateRoute>
                  <SecretariesPage />
                </PrivateRoute>
              }
            />
          )}
          {!isAdmin() && (
            <>
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
            </>
          )}
          <Route path="*" element={<PaginaNegasita />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
