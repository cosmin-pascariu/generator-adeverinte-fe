import {
  ADD_USER,
  REMOVE_USER,
  SET_TOKEN,
  SET_USERS,
} from "../constants/userConstants";

const initialState = {
  users: [],
  token: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
