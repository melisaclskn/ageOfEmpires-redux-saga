import * as types from "./actionType";
export const loadUnitsStart = () => ({
  type: types.LOAD_UNITS_START,
});

export const loadUnitsSuccess = (users) => ({
  type: types.LOAD_UNITS_SUCCESS,
  payload: users,
});

export const loadUnitsError = (error) => ({
  type: types.LOAD_UNITS_ERROR,
  payload: error,
});
//filter
export const filterByAgeStart = (error) => ({
  type: types.LOAD_UNITS_ERROR,
  payload: error,
});
export const filterByAgeSuccess = (error) => ({
  type: types.LOAD_UNITS_ERROR,
  payload: error,
});

export const filterByAgeError = (error) => ({
  type: types.LOAD_UNITS_ERROR,
  payload: error,
});


