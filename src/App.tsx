import * as React from 'react';
import AppBar from 'material-ui/AppBar';

// import { Base64 } from 'js-base64';

import './App.css';

// const apiKey: string = 'lFy9GaaZ9jC08EMPA7JOnjmhy3qy6VQmlzatBmOn';

interface Props {
  searchTerm: string;
}

interface CompanyHouseItemApiResponse {
  title: string;
  company_number: string;
}

interface CompanyDetail {
  name: string;
  companyNumber: string;
}

interface State {
  companies: Array<CompanyDetail>;
}

const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    // authorization: `BASIC ${Base64.encode(apiKey)}`
    authorization: 'Basic bEZ5OUdhYVo5akMwOEVNUEE3Sk9uam1oeTNxeTZWUW1semF0Qm1Pbjo='
  }
};

async function getCompanyHouseDetails(searchTerm: string) {
  const res = await fetch(
    `https://api.companieshouse.gov.uk/search?q=${searchTerm}`,
    requestOptions
  );
  const json = await res.json();
  return json;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    getCompanyHouseDetails(this.props.searchTerm).then(response => {
      const results = response.items.map((item: CompanyHouseItemApiResponse) => {
        return {
          name: item.title,
          companyNumber: item.company_number
        };
      });

      this.setState({ companies: results });
    });
  }

  render() {
    return (
      <AppBar title="Know Your Customer">
        <div className="App">TEST</div>;
      </AppBar>
    );
  }
}
