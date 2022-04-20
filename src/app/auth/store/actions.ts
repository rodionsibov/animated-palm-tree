import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/register-request-interface';
import { ActionTypes } from './action-types';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
