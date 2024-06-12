import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { ProfileContainer } from "./Profile.styles";
import getFaculties from "../../services/getFaculties";
import { setFaculties } from "../../redux/actions/facultiesActions";
import { useDispatch } from "react-redux";

function Profile() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const dispatch = useDispatch();
  const [userPicture, setUserPicture] = useState(
    localStorage.getItem("userPicture") ||
      "https://www.w3schools.com/howto/img_avatar.png"
  );
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

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

  const setFacultyData = async () => {
    const facultate = await getFaculties();
    dispatch(
      setFaculties([
        {
          fullname: facultate?.nume_complet,
          shortname: facultate?.nume_scurt,
          year: facultate?.an_universitar,
          decan: facultate?.nume_decan,
          secretar: facultate?.nume_secretar,
        },
      ])
    );
  };

  // const setSecretariesData = async () => {
  //   const secr = await getSecretaries();
  //   dispatch(setSecretaries({}));
  // };

  useEffect(() => {
    setFacultyData();
    console.log("GET is completed!");
  }, []);

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
          <label htmlFor="username">Adresa de email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email || ""}
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label htmlFor="password">Parolă:</label>
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
