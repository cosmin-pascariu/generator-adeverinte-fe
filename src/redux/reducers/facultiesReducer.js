import {
  ADD_FACULTY,
  REMOVE_FACULTY,
  SET_FACULTIES,
} from "../constants/facultiesContants";

const initialState = {
  faculties: [],
};

const facultiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACULTY:
      return {
        ...state,
        faculties: [...state.faculties, action.payload],
      };
    case REMOVE_FACULTY:
      return {
        ...state,
        faculties: state.faculties.filter(
          (faculty) => faculty.id !== action.payload
        ),
      };
    case SET_FACULTIES:
      return {
        ...state,
        faculties: action.payload,
      };
    default:
      return state;
  }
};

export default facultiesReducer;
