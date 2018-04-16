import { ActionTypes, TypeKeys } from '../action/index';

export type SelectedCompanyState = string;

export const reducer = (state: SelectedCompanyState = '', action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.SELECTED_COMPANY: {
      return action.payload;
    }
    default: {
      // do nothing
    }
  }

  return state;
};
