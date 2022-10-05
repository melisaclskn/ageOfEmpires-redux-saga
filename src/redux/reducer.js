import * as types from "./actionType";
const initialState = {
  units: [],
  loading: false,
};

const unitsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_UNITS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_UNITS_SUCCESS:
      return {
        ...state,
        units: action.payload,
        loading: false,
      };
    case types.LOAD_UNITS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default unitsReducers;
