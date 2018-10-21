import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from '../../utils/callApi'
import { fetchError, fetchSuccess, fetchRequest } from './actions'
import { HeroMatchActionTypes } from './types'

const handleFetch = function*(action: ReturnType<typeof fetchRequest>) {
  try {
    const result = yield call(callApi, 'get', `/heroes/${action.payload}/matches`)

    if (result.error) {
      yield put(fetchError(result.error))
    } else {
      yield put(fetchSuccess(result))
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchError(error.stack!))
    } else {
      yield put(fetchError('Unknown error'))
    }
  }
}

const watchFetchRequest = function*() {
  yield takeEvery(HeroMatchActionTypes.FETCH_REQUEST, handleFetch)
}

export const heroMatchSaga = function*() {
  yield all([fork(watchFetchRequest)])
}
