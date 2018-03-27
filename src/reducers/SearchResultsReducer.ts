import { CompanyDetail } from '../Common/types';
import { ActionTypes, TypeKeys } from '../action/index';

export interface SearchResult {
  term: string;
  items: CompanyDetail[];
}

export interface SearchResultsState {
  results: SearchResult[];
}

export const reducer = (state: SearchResultsState = { results: [] }, action: ActionTypes) => {
  console.log('Action received in CompanyDetailsReducer', action);

  // when action is of type "searchCompany", issue a fetch to companies house
  // and the results will be populated as new state
  switch (action.type) {
    case `${TypeKeys.SEARCH}_FULFILLED`: {
      // tslint:disable-next-line:no-any
      return [
        ...state.results,
        action.payload.data.items.map((item: { title: string; company_number: string }) => ({
          name: item.title,
          number: item.company_number
        }))
      ];
    }
    default: {
      // do nothing
    }
  }

  return state;
};
