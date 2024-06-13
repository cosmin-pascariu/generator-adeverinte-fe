// src/actions/studentActions.js
import axios from "axios";
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_STUDENTS,
} from "../constants/studentsConstants";

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const removeStudent = (studentId) => ({
  type: REMOVE_STUDENT,
  payload: studentId,
});

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  payload: students,
});

export const setStudentsAction = async (payload) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/studenti`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setStudents(response.data);
    return response.data;
  } catch (e) {
    console.log("Error SET students", e);
  }
};

export const getStudentsAction = async () => {
  const token = localStorage.getItem("token");

  console.log("token", token);

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/studenti`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("Error GET students", e);
  }
};
