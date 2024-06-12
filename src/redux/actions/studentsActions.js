// src/actions/studentActions.js
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
