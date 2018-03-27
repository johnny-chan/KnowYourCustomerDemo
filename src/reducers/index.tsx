import { combineReducers } from 'redux';
import { reducer as SearchResultsReducer, CompanyDetailsState } from './SearchResultsReducer';

export interface RootState {
  companyDetailsList: CompanyDetailsState;
}

export const rootReducer = combineReducers<RootState>({
  companyDetailsList: SearchResultsReducer
});
