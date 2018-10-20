import { HeroActionTypes, Hero } from './types';
import { action } from 'typesafe-actions'

export const fetchRequest = () => action(HeroActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Hero[]) => action(HeroActionTypes.FETCH_SUCCESS, data)

export const fetchError = (message: string) => action(HeroActionTypes.FETCH_ERROR, message)