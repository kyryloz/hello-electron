import { TeamState, TeamActionTypes } from './types'
import { Reducer } from 'redux'

const initialState: TeamState = {
  data: [],
  error: undefined,
  selected: undefined,
  loading: false,
}

export const teamReducer: Reducer<TeamState> = (state: TeamState = initialState, action) => {
  switch (action.type) {
    case TeamActionTypes.SELECT_TEAM:
    case TeamActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case TeamActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }
    case TeamActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }
    case TeamActionTypes.SELECTED: {
      return {
        ...state,
        loading: false,
        selected: action.payload,
      }
    }
    case TeamActionTypes.CLEAR_SELECTED: {
      return {
        ...state,
        selected: undefined,
      }
    }
    default: {
      return state
    }
  }
}
