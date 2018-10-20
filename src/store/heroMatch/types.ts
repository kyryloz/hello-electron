export interface HeroMatch {
  match_id: number
  league_name: string
}

export const enum HeroMatchActionTypes {
  FETCH_REQUEST = '@@heroMatch/FETCH_REQUEST',
  FETCH_SUCCESS = '@@heroMatch/FETCH_SUCCESS',
  FETCH_ERROR = '@@heroMatch/FETCH_ERROR',
}

export interface HeroMatchState {
  readonly loading: boolean
  readonly data?: HeroMatch
  readonly error?: string
}
