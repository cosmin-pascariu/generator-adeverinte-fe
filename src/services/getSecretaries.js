import axios from "axios";

const getSecretaries = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/secretari`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("GET Secretari error:", e);
    return false;
  }
};

export default getSecretaries;
