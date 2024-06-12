import axios from "axios";
import {
  ADD_SECRETARY,
  REMOVE_SECRETARY,
  SET_SECRETARIES,
} from "../constants/secretariesConstants";

export const addSecretary = (secretary) => ({
  type: ADD_SECRETARY,
  payload: secretary,
});

export const removeSecretary = (secretaryId) => ({
  type: REMOVE_SECRETARY,
  payload: secretaryId,
});

export const setSecretaries = (secretaries) => ({
  type: SET_SECRETARIES,
  payload: secretaries,
});

export const getSecretariesAction = async () => {
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
    addSecretary(response.data);
    return response.data;
  } catch (e) {
    console.log("GET Secretari error:", e);
    return false;
  }
};

export const addSecretaryAction = async (payload) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/secretari`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setSecretaries(response.data);
    return response.data;
  } catch (e) {
    console.log("Error ADD secretary", e);
  }
};

export const editSecretaryAction = async (payload, id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/secretari/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    // setSecretaries(response.data);
    return response.data;
  } catch (e) {
    console.log("Error edit secretary", e);
  }
};

export const deleteSecretaryAction = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/secretari/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("Error delete secretary", e);
  }
};
