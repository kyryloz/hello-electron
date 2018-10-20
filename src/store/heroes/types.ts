export type ApiResponse = Record<string, any>

export interface Hero {
  id: number
  name: string
  localized_name: string
  roles: string[]
}

export interface Heroes extends ApiResponse {
  data: Hero[]
}

export const enum HeroesActionTypes {
  FETCH_REQUEST = '@@heroes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@heroes/FETCH_SUCCESS',
  FETCH_ERROR = '@@heroes/FETCH_ERROR',
}

export interface HeroesState {
  readonly loading: boolean
  readonly data: Hero[]
  readonly error?: string
}
