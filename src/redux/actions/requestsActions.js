import axios from "axios";
import {
  ADD_REQUEST,
  REMOVE_REQUEST,
  SET_REQUESTS,
} from "../constants/requestsConstants";

export const addRequest = (request) => ({
  type: ADD_REQUEST,
  payload: request,
});

export const removeRequest = (requestId) => ({
  type: REMOVE_REQUEST,
  payload: requestId,
});

export const setRequests = (requests) => ({
  type: SET_REQUESTS,
  payload: requests,
});

export const getRequestsAction = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cereri`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setRequests(response.data);
    return response.data;
  } catch (e) {
    console.log("GET cereri error:", e);
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
