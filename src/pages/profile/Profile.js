import React, { useEffect, useState } from "react";
import { ProfileContainer } from "./Profile.styles";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

function Profile() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [userPicture, setUserPicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    localStorage.setItem("userPicture", userPicture);
    toast.success("Profile updated successfully!");
  };

  let userPictureFromLocalStorage = localStorage.getItem("userPicture");
  //   useEffect(() => {
  //     setUserPicture(localStorage.getItem("userPicture"));
  //   }, []);

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <form onSubmit={handleSubmit}>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label for="picture">Profile Picture:</label>
          <img
            src={
              userPictureFromLocalStorage
                ? userPictureFromLocalStorage
                : "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="profile"
            style={{
              height: "100%",
              width: "60%",
              padding: "20px",
            }}
          />
          <input
            type="file"
            id="picture"
            name="picture"
            value={userPicture}
            onChange={(e) => setUserPicture(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </ProfileContainer>
    </>
  );
}

export default Profile;
