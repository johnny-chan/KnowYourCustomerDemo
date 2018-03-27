import { combineReducers } from 'redux';
import { reducer as SearchResultsReducer, SearchResultsState } from './SearchResultsReducer';

export interface RootState {
  searchResults: SearchResultsState;
}

export const rootReducer = combineReducers<RootState>({
  searchResults: SearchResultsReducer
});
