import { combineReducers } from 'redux';
import { reducer as SearchResultsReducer, SearchResultsState } from './SearchResultsReducer';
import { reducer as SelectedCompanyReducer, SelectedCompanyState } from './SelectedCompanyReducer';

export interface RootState {
  searchResults: SearchResultsState;
  selectedCompany: SelectedCompanyState;
}

export const rootReducer = combineReducers<RootState>({
  searchResults: SearchResultsReducer,
  selectedCompany: SelectedCompanyReducer
});
