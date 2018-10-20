import { call, put, takeEvery, takeLatest, all, fork } from 'redux-saga/effects'
import { callApi } from '../../utils/callApi'
import { fetchError, fetchSuccess, selectTeam, teamSelected } from './actions'
import { TeamActionTypes } from './types'

const handleFetch = function*() {
  try {
    const result = yield call(callApi, 'get', '/teams')

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

const handleSelect = function*(action: ReturnType<typeof selectTeam>) {
  try {
    const detail = yield call(callApi, 'get', `/teams/${action.payload}`)
    const players = yield call(callApi, 'get', `/teams/${action.payload}/players`)

    if (detail.error || players.error) {
      yield put(fetchError(detail.error || players.error))
    } else {
      yield put(teamSelected({ detail, players }))
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
  yield takeEvery(TeamActionTypes.FETCH_REQUEST, handleFetch)
}

const watchSelectTeam = function*() {
  yield takeLatest(TeamActionTypes.SELECT_TEAM, handleSelect)
}

export const teamSaga = function*() {
  yield all([fork(watchFetchRequest), fork(watchSelectTeam)])
}
