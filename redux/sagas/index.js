import { put, takeLatest, all, call } from 'redux-saga/effects'
import { getText } from '../../api';
import actions from '../actions';


function* getTextSaga(action) {
  console.log('type', typeof getText)
  try {
    const response = yield call(getText);
    yield put(actions.getTextEnd({ text: response.data }));
  } catch (err) {
    yield put(actions.getTextEnd({ error: err.message }));
  }
  // receive action
  // make api call

  //dispatch end action with data
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    takeLatest('GET_TEXT', getTextSaga),
    // takeLatest('OTHER_ACTION', otherSaga),
  ])
}