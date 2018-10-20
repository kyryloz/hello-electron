export interface Team {
  team_id: number
  name: string
  rating: number
  wins: number
  loses: number
  logo_url: string
}

export interface Player {
  account_id: number
  name: string
  is_current_team_member: boolean
}

export interface TeamSelectedPayload {
  detail: Team,
  players: Player[]
}

export const enum TeamActionTypes {
  FETCH_REQUEST = '@team/FETCH_REQUEST',
  FETCH_SUCCESS = '@team/FETCH_SUCCESS',
  FETCH_ERROR = '@team/FETCH_ERROR',
  SELECT_TEAM = '@team/SELECT_TEAM',
  SELECTED = '@team/SELECTED',
  CLEAR_SELECTED = '@team/CLEAR_SELECTED'
}

export interface TeamState {
  readonly loading: boolean,
  readonly data: Team[],
  readonly selected?: TeamSelectedPayload,
  readonly error?: string,
}
