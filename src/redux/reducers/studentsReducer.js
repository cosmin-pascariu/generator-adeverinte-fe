// src/reducers/studentsReducer.js
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_STUDENTS,
} from "../constants/studentsConstants";

const initialState = {
  students: [],
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case REMOVE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};

export default studentsReducer;
