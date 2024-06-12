import axios from "axios";

const getFaculties = async () => {
  const token = localStorage.getItem("token"); // Replace this with your token retrieval logic

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/facultati`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // If needed, you can add more headers here
        },
      }
    );
    const facultate = response.data[0];
    return facultate;
  } catch (e) {
    console.log("GET Facultati error:", e);
    return false;
  }
};

export default getFaculties;
