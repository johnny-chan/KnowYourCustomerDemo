import { ActionTypes, TypeKeys } from '../action/index';
import { RootState } from '.';

export interface SearchResultsState {
  // tslint:disable-next-line:no-any
  items: any[];
}

export const getCompanyDetails = (state: RootState, id: string) => {
  // tslint:disable-next-line:no-any
  return state.searchResults.items.find((item: any) => {
    return item.company_number === id;
  });
};

export const reducer = (state: SearchResultsState = { items: [] }, action: ActionTypes) => {
  console.log('Action received in CompanyDetailsReducer', action);

  // when action is of type "searchCompany", issue a fetch to companies house
  // and the results will be populated as new state
  switch (action.type) {
    case `${TypeKeys.SEARCH}_FULFILLED`: {
      // console.warn('Search result complete', action.payload.data.items);
      // tslint:disable-next-line:no-any
      return {
        items: action.payload.data.items
      };
    }
    default: {
      // do nothing
    }
  }

  return state;
};
