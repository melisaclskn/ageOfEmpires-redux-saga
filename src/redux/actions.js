import * as types from "./actionType";
export const loadUsersStart = () => ({
  type: types.LOAD_UNITS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_UNITS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_UNITS_ERROR,
  payload: error,
});
