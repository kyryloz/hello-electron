import { action } from 'typesafe-actions'
import { HeroMatch, HeroMatchActionTypes } from './types'

export const fetchRequest = (heroId: number) => action(HeroMatchActionTypes.FETCH_REQUEST, heroId)

export const fetchSuccess = (data: HeroMatch) => action(HeroMatchActionTypes.FETCH_SUCCESS, data)

export const fetchError = (message: string) => action(HeroMatchActionTypes.FETCH_ERROR, message)
