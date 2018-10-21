import { Reducer } from 'redux'
import { HeroMatchActionTypes, HeroMatchState } from './types'

const initialState: HeroMatchState = {
  data: undefined,
  error: undefined,
  loading: false,
}

export const heroMatchReducer: Reducer<HeroMatchState> = (
  state: HeroMatchState = initialState,
  action
) => {
  switch (action.type) {
    case HeroMatchActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case HeroMatchActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }
    case HeroMatchActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
