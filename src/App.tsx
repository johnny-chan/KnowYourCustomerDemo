import * as React from 'react';
import AppBar from 'material-ui/AppBar';

// import { Base64 } from 'js-base64';

import './App.css';

// const apiKey: string = 'lFy9GaaZ9jC08EMPA7JOnjmhy3qy6VQmlzatBmOn';

interface Props {
  searchTerm: string;
}

interface CompanyDetail {
  name: string;
  companyNumber: string;
}

interface State {
  // tslint:disable-next-line:no-any
  companies: CompanyDetail[];
}

const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    // authorization: `BASIC ${Base64.encode(apiKey)}`
    authorization: 'basic bEZ5OUdhYVo5akMwOEVNUEE3Sk9uam1oeTNxeTZWUW1semF0Qm1Pbjo='
  }
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    const response = await fetch(
      `https://api.companieshouse.gov.uk/search?q=${this.props.searchTerm}`,
      requestOptions
    );

    const result = await response.json();

    const companyDetails: Array<CompanyDetail> = result.items.map(
      (item: { title: string; company_number: string }) => {
        return {
          name: item.title,
          companyNumber: item.company_number
        };
      }
    );

    // tslint:disable-next-line:no-console
    console.log(`name is ${companyDetails[0].name}`);
    // tslint:disable-next-line:no-console
    console.log(`name is ${companyDetails[0].companyNumber}`);
    // how can you iterate through items and convert to companyDetail type
    // const companyDetails: Array<CompanyDetail> =  JSON.parse(JSON.stringify(result.items));
    //   const companies: CompanyDetail[] = items.map(item => <CompanyDetail>{
    //   name : item.title,
    //   number: item.company_number
    // });

    // tslint:disable-next-line:no-console
    // console.log(`Items is ${JSON.stringify(companyDetails)}`);

    this.setState({ companies: companyDetails });

    // tslint:disable-next-line:no-console
    // console.log('companies:' + JSON.stringify(this.state.companies));
  }

  render() {
    return (
      <AppBar title="Know Your Customer">
        <div className="App">TEST</div>;
      </AppBar>
    );
  }
}
