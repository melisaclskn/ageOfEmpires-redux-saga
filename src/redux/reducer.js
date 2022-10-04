import * as types from "./actionType";
const initialState = {
  users: [],
  user: {},
  loading: false,
};

const unitsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.LOAD_USERS_ERROR:
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
