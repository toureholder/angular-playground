import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, updateUser } from './state.actions';
import { AppState } from './state.model';

export const initialState: AppState = { count: 0, user: undefined };

// Reducer for entire state
const _stateReducer = createReducer(
  initialState,
  on(increment, (state): AppState => {
    return { ...state, count: state.count + 1 };
  }),
  on(decrement, (state): AppState => {
    return { ...state, count: state.count - 1 };
  }),
  on(reset, (state): AppState => {
    return { ...state, count: 0 };
  })
);

export const stateReducer = (state: AppState | undefined, action: Action) =>
  _stateReducer(state, action);

// Reducer for just part of the state
export const countReducer = createReducer(
  initialState.count,
  on(increment, (state): number => state + 1),
  on(decrement, (state): number => state - 1),
  on(reset, (_): number => 0)
);

// Reducer for just part of the state
export const userReducer = createReducer(
  initialState.user,
  on(updateUser, (_, { value }): string => value)
);
