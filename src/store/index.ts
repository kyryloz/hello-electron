import { Action, AnyAction, combineReducers, Dispatch } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { heroesReducer } from './heroes/reducer'
import { heroesSaga } from './heroes/sagas'
import { HeroesState } from './heroes/types'
import { heroMatchReducer } from './heroMatch/reducer'
import { heroMatchSaga } from './heroMatch/sagas'
import { HeroMatchState } from './heroMatch/types'

export interface ApplicationState {
  heroes: HeroesState
  heroMatch: HeroMatchState
}

export const rootReducer = combineReducers<ApplicationState>({
  heroes: heroesReducer,
  heroMatch: heroMatchReducer,
})

export const rootSaga = function*() {
  yield all([fork(heroesSaga), fork(heroMatchSaga)])
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}
