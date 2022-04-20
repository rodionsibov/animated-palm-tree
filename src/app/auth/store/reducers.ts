import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/auth-state-interface';
import { registerAction } from './actions';

const initialState: AuthStateInterface = {
  isSummiting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSummiting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
