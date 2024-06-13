import React, { useEffect, useState } from "react";
import {
  FormContainer,
  LeftContainer,
  LoginContainer,
  RightContainer,
  RowContainer,
} from "./Login.styles";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import jwtExtractor from "../../utils/jwtExtractor";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, login } from "../../redux/actions/userActions";
import getFaculties from "../../services/getFaculties";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

function Login() {
  const { token } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [accessTokenData, setAccessTokenData] = useState("");
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    login(payload, dispatch);
  };

  useEffect(() => {
    if (accessTokenData) {
      localStorage.setItem(
        "userName",
        accessTokenData.given_name + " " + accessTokenData.family_name
      );
      localStorage.setItem("userPicture", accessTokenData.picture);
      localStorage.setItem("userRole", "student");

      if (accessTokenData.hd === "student.usv.ro") {
        navigation("/cerere");
      } else {
        toast.error("You must use a student.usv.ro account", "_blank");
      }
    }
  }, [accessTokenData, navigation]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("userName", email);
      localStorage.setItem("userPicture", "");
      localStorage.setItem("userRole", jwtExtractor(token).role);
      localStorage.setItem("token", token);
      jwtExtractor(token)?.role === "admin"
        ? navigation("/profil")
        : navigation("/home");
    }
  }, [token]);

  return (
    <LoginContainer>
      <LeftContainer>
        <FormContainer>
          <h1>Autentificare Secretariat/Student</h1>
          <div id="googleButton">
            <GoogleLogin
              onSuccess={(tokenResponse) => {
                setAccessTokenData(jwtExtractor(tokenResponse.credential));
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              width={window.innerWidth < 768 ? window.innerWidth - 40 : 400}
            />
          </div>

          <div className="divider">
            <div className="line" />
            <p className="or">SAU</p>
            <div className="line" />
          </div>
          <h1>Autentificare Administrator</h1>
          <h5>Introdu credențialele</h5>
          <label htmlFor="email">Adresa de email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // required
          />
          <label htmlFor="password">Parolă</label>
          <div className="row">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              // required
            />
            <div className="password-eye">
              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(!showPassword)}
                  size={24}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPassword(!showPassword)}
                  size={24}
                />
              )}
            </div>
          </div>
          <RowContainer>
            <div className="remember-me">
              <input type="checkbox" />
              <label htmlFor="remember">Păstrează-mă autentificat</label>
            </div>
            <a href="/">Ai uitat parola?</a>
          </RowContainer>
          <button onClick={() => handleLogin()}>Autentificare</button>
        </FormContainer>
      </LeftContainer>
      <RightContainer>
        <video autoPlay loop muted>
          <source
            src={require("../../assets/USV-2022-nosound.mp4")}
            type="video/mp4"
          />
        </video>
      </RightContainer>
      <ToastContainer />
    </LoginContainer>
  );
}

export default Login;
