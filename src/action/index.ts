import axios from 'axios';

const API_KEY = 'lFy9GaaZ9jC08EMPA7JOnjmhy3qy6VQmlzatBmOn';

const ROOT_URL = 'https://api.companieshouse.gov.uk';

export enum TypeKeys {
  SEARCH = 'SEARCH'
}

export interface SearchAction {
  type: TypeKeys.SEARCH;
  // tslint:disable-next-line:no-any
  payload: any;
}

export type ActionTypes = SearchAction;

// create an action creator that will be responsible for fetching the companies house data

export function CompanyHouseSearch(term: string): SearchAction {
  const url = `${ROOT_URL}/search?q=${term}`;

  const request = axios.get(url, {
    auth: {
      username: API_KEY,
      password: ''
    }
  });

  console.log('Request in action creator:', request);

  return {
    type: TypeKeys.SEARCH,
    payload: request
  };
}
