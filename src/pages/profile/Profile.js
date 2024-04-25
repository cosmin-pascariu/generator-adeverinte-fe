import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { ProfileContainer } from "./Profile.styles";

function Profile() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [userPicture, setUserPicture] = useState(
    localStorage.getItem("userPicture") ||
      "https://www.w3schools.com/howto/img_avatar.png"
  );

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
    toast.success("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nume complet:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName || ""}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
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
          <button type="submit">Salvează</button>
        </form>
      </ProfileContainer>
      <ToastContainer />
    </>
  );
}

export default Profile;
