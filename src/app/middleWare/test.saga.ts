import {takeEvery, put} from 'redux-saga/effects'

function* testSagaMiddleware (action: any) {
    console.log('testSaga')
    yield put({type: action.type, payload: action.payload})
}

const pattern = (action: any) => action.meta && action.meta.pattern === 'TEST_ACTION_EFFECT'

function* testSaga() {
    yield takeEvery(pattern, testSagaMiddleware)
}

export default testSaga