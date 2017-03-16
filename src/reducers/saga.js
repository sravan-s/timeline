// import { delay } from 'redux-saga';
// import { call } from 'redux-saga/effects';
function* saga() {
  console.log('saga');
}

export function* helloSaga() {
  fetch('/api/person')
    .then(response => {
      console.log(response.json());
    });
  console.warn('Hello Sagas!');
}

export default saga;
