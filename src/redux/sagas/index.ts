import { all, fork } from 'redux-saga/effects';
import { watchProjectSaga } from './projectSaga';

export function* rootSaga() {
    yield all([
        fork(watchProjectSaga),
    ]);
}
