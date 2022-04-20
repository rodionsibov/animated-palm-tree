import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ username: string; password: string }>()
);
