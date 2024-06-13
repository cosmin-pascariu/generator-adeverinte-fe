import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { ProfileContainer } from "./Profile.styles";
import { editAdminAction } from "../../redux/actions/userActions";

function Profile() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [activateNewPassword, setActivateNewPassword] = useState(false);
  const [userPicture, setUserPicture] = useState(
    localStorage.getItem("userPicture") ||
      "https://www.w3schools.com/howto/img_avatar.png"
  );
  const [userData, setUserData] = useState({
    email: localStorage.getItem("userName") || "",
    password: "",
  });

  const handleEditEmail = async () => {
    await editAdminAction(
      {
        email: userData.email,
      },
      2
    );
  };

  const handleEditPassword = async () => {
    await editAdminAction(
      {
        password: userData.password,
      },
      2
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPicture(reader.result);
        localStorage.setItem("userPicture", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please select an image file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
  };

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Adresa de email:</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              gap: 10,
            }}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email || ""}
              placeholder="Adresa de email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />

            <button
              style={{ textWrap: "nowrap", marginBottom: 20 }}
              onClick={() => handleEditEmail()}
            >
              Schimbă email-ul
            </button>
          </div>
          <label htmlFor="password">Parolă nouă:</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              gap: 10,
            }}
          >
            <input
              type="password"
              id="passowrd"
              name="password"
              value={userData.password || ""}
              placeholder="Parolă"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />

            <button
              style={{ textWrap: "nowrap", marginBottom: 20 }}
              onClick={() => handleEditPassword()}
            >
              Schimbă parola
            </button>
          </div>
          <label htmlFor="picture">Poza profil:</label>
          <img
            src={userPicture}
            alt="profile"
            style={{
              height: "200px",
              width: "200px",
              padding: "20px",
            }}
          />
          <input
            type="file"
            id="picture"
            name="picture"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <button
            type="button"
            onClick={() => {
              document.getElementById("picture").click();
            }}
          >
            Încarcă altă imagine de profil
          </button>
          {/* <button type="submit">Salvează</button> */}
        </form>
      </ProfileContainer>
      <ToastContainer />
    </>
  );
}

export default Profile;
