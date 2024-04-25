import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarUserName,
} from "./Navbar.styles";

function Navbar() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [userPicture, setUserPicture] = useState(
    localStorage.getItem("userPicture")
  );
  const path = window.location.pathname;
  const userRole = localStorage.getItem("userRole");

  const isAdmin = userRole === "admin";

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("userNamex", localStorage.getItem("userName"));

      setUserName(localStorage.getItem("userName"));
      setUserPicture(localStorage.getItem("userPicture"));
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <NavbarContainer>
      <div style={{ display: "flex", gap: "5px" }}>
        <NavbarLogo>
          <img
            src={
              userPicture || "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="user"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
        </NavbarLogo>
        <NavbarUserName>{userName || "Utilizator"}</NavbarUserName>
      </div>
      <NavbarLinks>
        {isAdmin ? (
          <>
            <NavbarLink to="/profil" isSelected={path.includes("profil")}>
              Profil
            </NavbarLink>
            <NavbarLink to="/facultate" isSelected={path.includes("facultate")}>
              Facultate
            </NavbarLink>
            <NavbarLink to="/secretari" isSelected={path.includes("secretari")}>
              Secretari
            </NavbarLink>
            <NavbarLink to="/studenti" isSelected={path.includes("studenti")}>
              Studenți
            </NavbarLink>
            <NavbarLink to="/setari" isSelected={path.includes("setari")}>
              Setari
            </NavbarLink>
          </>
        ) : (
          <>
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
          </>
        )}
      </NavbarLinks>
      <NavbarLink to="/login" onClick={() => localStorage.clear()}>
        Delogare
      </NavbarLink>
    </NavbarContainer>
  );
}

export default Navbar;
