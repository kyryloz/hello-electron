import { combineReducers, Action, AnyAction, Dispatch } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { LayoutState } from './layout/types'
import { layoutReducer } from './layout/reducer'
import { HeroState } from './hero/types'
import { heroReducer } from './hero/reducer'
import { TeamState } from './team/types'
import { teamReducer } from './team/reducer'
import { heroesSaga } from './hero/sagas'
import { teamSaga } from './team/sagas'

export interface ApplicationState {
  layout: LayoutState
  hero: HeroState
  team: TeamState
}

export const rootReducer = combineReducers<ApplicationState>({
  layout: layoutReducer,
  hero: heroReducer,
  team: teamReducer,
})

export const rootSaga = function*() {
  yield all([fork(heroesSaga), fork(teamSaga)])
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}
