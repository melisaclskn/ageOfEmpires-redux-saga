import {
  takeLatest,
  put,
  call,
  fork,
  all
} from "redux-saga/effects";
import {
  loadUnitsSuccess,
  loadUnitsError
} from "./actions";
import {
  loadUsersApi
} from "./api";

import * as types from "./actionType";

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    
      yield put(loadUnitsSuccess(response));
  
  } catch (error) {
    yield put(loadUnitsError(error));
  }
}


export function* onLoadUsers() {
  yield takeLatest(types.LOAD_UNITS_START, onLoadUsersStartAsync);
}


const userSagas = [
  fork(onLoadUsers)
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
