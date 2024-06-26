import { toast } from "react-toastify";
import {
  ADD_USER,
  REMOVE_USER,
  SET_TOKEN,
  SET_USERS,
} from "../constants/userConstants";
import axios from "axios";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const login = async (payload, dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    toast.error("Adresă de email sau parolă incorecte!");
    dispatch(setToken(data?.access_token));
    return data[0];
  } catch (error) {
    console.log("Something went wrong", error);
    return error;
  }
};

export const editAdminAction = async (payload, id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/admins/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("Error edit secretary", e);
  }
};
