import { ActionTypes, TypeKeys } from '../action/index';
import { RootState } from '.';
import { CompanyDetail } from '../common/types';

export interface SearchResultsState {
  items: CompanyDetail[];
}

export type SearchResultState = CompanyDetail[];

export const getCompanyDetails = (state: RootState, id: string): CompanyDetail | undefined => {
  return state.searchResults.items.find((item: CompanyDetail) => {
    return item.companyNumber === id;
  });
};

export const reducer = (
  state: SearchResultsState = { items: [] },
  action: ActionTypes
): SearchResultsState => {
  console.log('Action received in CompanyDetailsReducer', action);

  // when action is of type "searchCompany", issue a fetch to companies house
  // and the results will be populated as new state
  switch (action.type) {
    case `${TypeKeys.SEARCH}_FULFILLED`: {
      // console.warn('Search result complete', action.payload.data.items);
      // tslint:disable-next-line:no-any
      const items: CompanyDetail[] = action.payload.data.items.map((item: any) => {
        return {
          name: item.title,
          companyNumber: item.company_number,
          status: item.company_status,
          type: item.company_type,
          createdDate: item.date_of_creation,
          endDate: item.date_of_cessation
        };
      });

      return { items };
    }
    default: {
      // do nothing
    }
  }

  return state;
};
