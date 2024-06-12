import axios from "axios";

const updateFaculties = async (payload) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/facultati`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response", response);
    return true;
  } catch (e) {
    console.log("PUT Facultati error:", e);
    return false;
  }
};

export default updateFaculties;
