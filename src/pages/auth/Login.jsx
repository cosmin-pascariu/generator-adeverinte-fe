import React from "react";
import {
  FormContainer,
  LeftContainer,
  LoginContainer,
  RightContainer,
  RowContainer,
} from "./Login.styles";
import GoogleButton from "../../components/google-button/GoogleButton";
// import LoginBg from "../../assets/login-background.png";

function Login() {
  return (
    <LoginContainer>
      <LeftContainer>
        <FormContainer>
          <h1>Log in</h1>
          <h5>Enter your account details below.</h5>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
          <RowContainer>
            <div>
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
        {/* <img src={LoginBg} alt="login" /> */}
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
