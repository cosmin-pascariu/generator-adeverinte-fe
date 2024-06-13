import {
  ADD_REQUEST,
  REMOVE_REQUEST,
  SET_REQUESTS,
} from "../constants/requestsConstants";

const initialState = {
  requests: [],
};

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    case REMOVE_REQUEST:
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.id !== action.payload
        ),
      };
    case SET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    default:
      return state;
  }
};

export default requestsReducer;
