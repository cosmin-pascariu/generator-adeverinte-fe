import React from "react";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarUserName,
} from "./Navbar.styles";

function Navbar() {
  return (
    <NavbarContainer>
      <div style={{ display: "flex", gap: "20px" }}>
        <NavbarLogo>Navbar</NavbarLogo>
        <NavbarUserName>UserName</NavbarUserName>
      </div>
      <NavbarLinks>
        <NavbarLink to="/home">Cereri</NavbarLink>
        <NavbarLink to="/requests-list">Listare</NavbarLink>
        <NavbarLink to="/home">Arhiva</NavbarLink>
        <NavbarLink to="/requests-list">Studenti</NavbarLink>
      </NavbarLinks>
      <NavbarLink to="/login">Logout</NavbarLink>
    </NavbarContainer>
  );
}

export default Navbar;
