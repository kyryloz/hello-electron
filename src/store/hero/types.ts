export type ApiResponse = Record<string, any>

export interface Hero extends ApiResponse {
  id: number
  name: string
  img: string
  icon: string
  roles: string[]
}

export const enum HeroActionTypes {
  FETCH_REQUEST = '@hero/FETCH_REQUEST',
  FETCH_SUCCESS = '@hero/FETCH_SUCCESS',
  FETCH_ERROR = '@hero/FETCH_ERROR',
  SELECT_HERO = '@hero/SELECT_HERO',
  SELECTED = '@hero/SELECTED',
}

export interface HeroState {
  readonly loading: boolean
  readonly data: Hero[]
  readonly error?: string
}
