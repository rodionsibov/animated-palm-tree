import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';

export const register = createAction(
  ActionTypes.REGISTER,
  props<{ username: string; password: string }>()
);
