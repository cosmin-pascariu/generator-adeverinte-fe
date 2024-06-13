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
import { useDispatch, useSelector } from "react-redux";
import Profile from "./pages/profile/Profile";
import FacultyPage from "./pages/faculty/Faculty";
import SecretariesPage from "./pages/secretaries/Secretaries";
import StudentsPage from "./pages/students/Students";
import GoogleForm from "./pages/google-form/GoogleForm";
import SettingsPage from "./pages/settings/SettingsPage";
import { useState } from "react";

function App() {
  const { userName } = useSelector((state) => state.user);
  const isAdmin = localStorage.getItem("userRole") === "admin";

  const isAuthenticated = () => {
    const item = localStorage.getItem("userRole");
    return !!item || !!userName;
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAdmin && (
            <Route
              path="/profil"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          )}
          {isAdmin && (
            <Route
              path="/facultate"
              element={
                <PrivateRoute>
                  <FacultyPage />
                </PrivateRoute>
              }
            />
          )}
          {isAdmin && (
            <Route
              path="/secretari"
              element={
                <PrivateRoute>
                  <SecretariesPage />
                </PrivateRoute>
              }
            />
          )}
          {isAdmin && (
            <Route
              path="/studenti"
              element={
                <PrivateRoute>
                  <StudentsPage />
                </PrivateRoute>
              }
            />
          )}
          {isAdmin && (
            <Route
              path="/setari"
              element={
                <PrivateRoute>
                  <SettingsPage />
                </PrivateRoute>
              }
            />
          )}
          {!isAdmin && (
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
              <Route
                path="/studenti"
                element={
                  <PrivateRoute>
                    <StudentsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/cerere"
                element={
                  <PrivateRoute>
                    <GoogleForm />
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
