import React from "react";
import { GoogleButtonContainer } from "./GoogleButton.styles";
import { useGoogleLogin } from "@react-oauth/google";
import jwtExtractor from "../../utils/jwtExtractor";

function GoogleButton() {
  const login = useGoogleLogin({
    onSuccess: (data) => {
      console.table(data);
      // jwtExtractor(data.accessToken);
    },
  });

  return (
    <GoogleButtonContainer onClick={() => login()}>
      <img
        src="https://img.icons8.com/color/48/000000/google-logo.png"
        alt="google"
      />
      <p>Log in with Google</p>
    </GoogleButtonContainer>
  );
}

export default GoogleButton;
