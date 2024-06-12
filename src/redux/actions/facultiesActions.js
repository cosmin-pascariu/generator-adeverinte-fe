import {
  ADD_FACULTY,
  REMOVE_FACULTY,
  SET_FACULTIES,
} from "../constants/facultiesContants";

export const addFaculty = (faculty) => ({
  type: ADD_FACULTY,
  payload: faculty,
});

export const removeFaculty = (facultyId) => ({
  type: REMOVE_FACULTY,
  payload: facultyId,
});

export const setFaculties = (faculties) => ({
  type: SET_FACULTIES,
  payload: faculties,
});
