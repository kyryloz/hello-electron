export type ThemeColors = 'light' | 'dark'

export const enum LayoutActionTypes {
  SET_THEME = '@layout/SET_THEME',
}

export interface LayoutState {
  readonly theme: ThemeColors
}
