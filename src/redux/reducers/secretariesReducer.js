import {
  ADD_SECRETARY,
  REMOVE_SECRETARY,
  SET_SECRETARIES,
} from "../constants/secretariesConstants";

const initialState = {
  secretaries: [],
};

const secretariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SECRETARY:
      return {
        ...state,
        secretaries: [...state.secretaries, action.payload],
      };
    case REMOVE_SECRETARY:
      return {
        ...state,
        secretaries: state.secretaries.filter(
          (secretary) => secretary.id !== action.payload
        ),
      };
    case SET_SECRETARIES:
      return {
        ...state,
        secretaries: action.payload,
      };
    default:
      return state;
  }
};

export default secretariesReducer;
