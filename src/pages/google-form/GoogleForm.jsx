import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { GoogleFormContainer } from "./GoogleForm.styles";

function GoogleForm() {
  return (
    <>
      <Navbar />
      <GoogleFormContainer>
        <iframe
          title="Cerere adeverință"
          src={process.env.REACT_APP_GOOGLE_FORM_URL}
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Se încarcă…
        </iframe>
      </GoogleFormContainer>
    </>
  );
}

export default GoogleForm;
