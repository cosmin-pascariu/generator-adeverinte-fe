import {
  ADD_SECRETARY,
  REMOVE_SECRETARY,
  SET_SECRETARIES,
} from "../constants/secretariesConstants";

export const addSecretary = (secretary) => ({
  type: ADD_SECRETARY,
  payload: secretary,
});

export const removeSecretary = (secretaryId) => ({
  type: REMOVE_SECRETARY,
  payload: secretaryId,
});

export const setSecretaries = (secretaries) => ({
  type: SET_SECRETARIES,
  payload: secretaries,
});
