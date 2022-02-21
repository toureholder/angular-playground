import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state.model';

export const selectState = createFeatureSelector<AppState>('state');

export const selectCount = createFeatureSelector<number>('count');

export const selectUser = createFeatureSelector<string>('user');

export const selectFeatureCount = createSelector(
  selectState,
  (state: AppState) => state.count
);

export const selectFeatureCount2 = createSelector(
  selectCount,
  (state: number) => state
);

export const selectFeatureUser = createSelector(
  selectUser,
  (state: string) => state
);
