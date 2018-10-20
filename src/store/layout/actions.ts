import { action } from 'typesafe-actions'
import { ThemeColors, LayoutActionTypes } from './types'

export const setTheme = (theme: ThemeColors) => action(LayoutActionTypes.SET_THEME, theme)
