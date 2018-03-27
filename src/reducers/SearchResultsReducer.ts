import { CompanyDetail } from '../Common/types';
import { ActionTypes, TypeKeys } from '../action/index';

export interface CompanyDetailsState {
  items: CompanyDetail[];
}

export const reducer = (state: CompanyDetailsState = { items: [] }, action: ActionTypes) => {
  console.log('Action received in CompanyDetailsReducer', action);

  // when action is of type "searchCompany", issue a fetch to companies house
  // and the results will be populated as new state
  switch (action.type) {
    case `${TypeKeys.SEARCH}_FULFILLED`: {
      // tslint:disable-next-line:no-any
      return action.payload.data.items.map((item: any) => {
        return {
          name: item.title,
          number: item.company_number
        };
      });
    }
    default: {
      // do nothing
    }
  }

  return state;
};
