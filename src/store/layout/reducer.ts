import { LayoutState, LayoutActionTypes } from './types'
import { Reducer } from 'redux'

const initialState: LayoutState = {
  theme: 'light',
}

export const layoutReducer: Reducer<LayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
