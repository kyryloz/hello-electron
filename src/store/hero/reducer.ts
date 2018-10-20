import { HeroState, HeroActionTypes } from './types'
import { Reducer } from 'redux'

const initialState: HeroState = {
  data: [],
  error: undefined,
  loading: false,
}

export const heroReducer: Reducer<HeroState> = (state = initialState, action) => {
  switch (action.type) {
    case HeroActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case HeroActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }
    case HeroActionTypes.FETCH_ERROR: {
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
