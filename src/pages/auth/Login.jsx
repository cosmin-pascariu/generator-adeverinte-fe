import React, { useState } from "react";
import {
  FormContainer,
  LeftContainer,
  LoginContainer,
  RightContainer,
  RowContainer,
} from "./Login.styles";
import GoogleButton from "../../components/google-button/GoogleButton";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LoginContainer>
      <LeftContainer>
        <FormContainer>
          <h1>Log in</h1>
          <h5>Enter your account details below.</h5>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <div className="row">
            <input type="password" placeholder="Password" />
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
          <button>Login</button>
          <GoogleButton />
          <span>
            Don't have an account?<a href="/"> Sign up</a>
          </span>
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
    </LoginContainer>
  );
}

export default Login;
