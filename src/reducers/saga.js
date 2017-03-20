import { call, put, takeLatest } from 'redux-saga/effects';

const fetchPeople = () => {
  return fetch('/api/person')
    .then(response => {
      return response.json();
    })
    .then(res => {
      return res.data;
    });
};

export function* helloSaga() {
  try {
    const people = yield call(fetchPeople);
    // import from actions
    yield put({ type: 'INIT_APP_SUCCESS', people });
  } catch (e) {
    yield put({ type: 'INIT_APP_FAILED' });
  }
}

function* saga() {
  yield takeLatest('USER_FETCH_REQUESTED', helloSaga);
  console.log('saga');
}

export default saga;
