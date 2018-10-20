import { Reducer } from 'redux'
import { HeroesActionTypes, HeroesState } from './types'

const initialState: HeroesState = {
  data: [],
  error: undefined,
  loading: false,
}

export const heroesReducer: Reducer<HeroesState> = (state = initialState, action) => {
  switch (action.type) {
    case HeroesActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case HeroesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }
    case HeroesActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
