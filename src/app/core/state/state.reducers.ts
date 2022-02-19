import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './state.actions';

export const initialState = 0;

const _couterReducer = createReducer(
  initialState,
  on(increment, (state): number => state + 1),
  on(decrement, (state): number => state - 1),
  on(reset, (_): number => 0)
);

export const counterReducer = (state: number | undefined, action: Action) =>
  _couterReducer(state, action);
