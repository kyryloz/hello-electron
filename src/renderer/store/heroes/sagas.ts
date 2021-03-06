import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { HeroesActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/callApi'

const handleFetch = function*() {
  try {
    const res = yield call(callApi, 'get', '/heroes')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

const watchFetchRequest = function*() {
  yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch)
}

export const heroesSaga = function*() {
  yield all([fork(watchFetchRequest)])
}
