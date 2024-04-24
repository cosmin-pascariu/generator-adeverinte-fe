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
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [accessTokenData, setAccessTokenData] = useState("");
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Compleatați toate câmpurile!");
      return;
    }
    dispatch(login({ userName: email }));
    console.log("email", email);
    localStorage.setItem("userName", email);
    localStorage.setItem("userPicture", "");
    localStorage.setItem("userRole", "admin");
    isAdmin() ? navigation("/profile") : navigation("/home");
  };

  const isAdmin = () => {
    const item = localStorage.getItem("userRole");
    return item === "admin";
  };

  useEffect(() => {
    if (accessTokenData) {
      dispatch(
        login({
          userName:
            accessTokenData.given_name + " " + accessTokenData.family_name,
          picture: accessTokenData.picture,
        })
      );
      localStorage.setItem(
        "userName",
        accessTokenData.given_name + " " + accessTokenData.family_name
      );
      localStorage.setItem("userPicture", accessTokenData.picture);

      if (accessTokenData.hd === "student.usv.ro") {
        isAdmin() ? navigation("/profile") : navigation("/home");
      } else {
        toast.error("You must use a student.usv.ro account");
      }
    }
  }, [accessTokenData, navigation]);

  useEffect(() => {
    console.log("email", email);
    console.log("password", password);
  }, [email, password]);

  return (
    <LoginContainer>
      <LeftContainer>
        <FormContainer>
          <h1>Log in</h1>
          <h5>Enter your account details below - only for Admins</h5>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="row">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
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
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/">Forgot your password?</a>
          </RowContainer>
          <button onClick={handleLogin}>Login</button>
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
          <p className="text">
            Don't have an account?<a href="/"> Sign up</a>
          </p>
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
