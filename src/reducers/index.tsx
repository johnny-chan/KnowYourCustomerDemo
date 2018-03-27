import { combineReducers } from 'redux';
import { reducer as CompanyDetailsReducer, CompanyDetailsState } from './CompanyDetailsReducer';

export interface RootState {
  companyDetailsList: CompanyDetailsState;
}

export const rootReducer = combineReducers<RootState>({
  companyDetailsList: CompanyDetailsReducer
});
