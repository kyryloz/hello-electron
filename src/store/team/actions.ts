import { Team, TeamActionTypes, TeamSelectedPayload } from './types';
import { action } from 'typesafe-actions'

export const fetchRequest = () => action(TeamActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Team[]) => action(TeamActionTypes.FETCH_SUCCESS, data)

export const fetchError = (message: string) => action(TeamActionTypes.FETCH_ERROR, message)

export const clearSelected = () => action(TeamActionTypes.CLEAR_SELECTED)

export const selectTeam = (teamId: number) => action(TeamActionTypes.SELECT_TEAM, teamId)

export const teamSelected = (team: TeamSelectedPayload) => action(TeamActionTypes.SELECTED, team)