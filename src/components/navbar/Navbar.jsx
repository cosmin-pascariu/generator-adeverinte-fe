import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarUserName,
} from "./Navbar.styles";

function Navbar() {
  const userName = localStorage.getItem("userName");
  const userPicture = localStorage.getItem("userPicture");
  const path = window.location.pathname;

  console.log("User picture:", userPicture);

  return (
    <NavbarContainer>
      <div style={{ display: "flex", gap: "5px" }}>
        <NavbarLogo>
          <img
            src={userPicture}
            alt="user"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
        </NavbarLogo>
        <NavbarUserName>{userName || "Utilizator"}</NavbarUserName>
      </div>
      <NavbarLinks>
        <NavbarLink to="/home" isSelected={path.includes("home")}>
          Cereri
        </NavbarLink>
        <NavbarLink
          to="/requests-list"
          isSelected={path.includes("requests-list")}
        >
          Listare
        </NavbarLink>
        <NavbarLink to="/arhiva" isSelected={path.includes("arhiva")}>
          Arhiva
        </NavbarLink>
        <NavbarLink to="/students" isSelected={path.includes("students")}>
          Studenti
        </NavbarLink>
      </NavbarLinks>
      <NavbarLink to="/login" onClick={() => localStorage.clear()}>
        Logout
      </NavbarLink>
    </NavbarContainer>
  );
}

export default Navbar;
