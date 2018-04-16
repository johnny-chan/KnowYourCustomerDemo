import axios from 'axios';

const API_KEY = 'lFy9GaaZ9jC08EMPA7JOnjmhy3qy6VQmlzatBmOn';

const ROOT_URL = 'https://api.companieshouse.gov.uk';

export enum TypeKeys {
  SEARCH = 'SEARCH',
  SELECTED_COMPANY = 'SELECTED_COMPANY'
}

export interface SearchAction {
  type: TypeKeys.SEARCH;
  // tslint:disable-next-line:no-any
  payload: any;
}

export interface SelectedCompanyAction {
  type: TypeKeys.SELECTED_COMPANY;
  payload: string;
}

export type ActionTypes = SearchAction | SelectedCompanyAction;

// create an action creator that will be responsible for fetching the companies house data

export function CompanyHouseSearch(term: string): SearchAction {
  const url = `${ROOT_URL}/search/companies?q=${term}`;

  const request = axios.get(url, {
    auth: {
      username: API_KEY,
      password: ''
    }
  });

  console.log('CompanyHouseSearch action creator:', request);

  return {
    type: TypeKeys.SEARCH,
    payload: request
  };
}

export function SelectedCompany(name: string): SelectedCompanyAction {
  console.log('SelectedCompany action creator invoked:', name);

  return {
    type: TypeKeys.SELECTED_COMPANY,
    payload: name
  };
}
