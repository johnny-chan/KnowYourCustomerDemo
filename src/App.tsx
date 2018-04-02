import * as React from 'react';
// import AppBar from 'material-ui/AppBar';
// import { Card, CardText } from 'material-ui/Card';
// import ToolBarGroup from 'material-ui/Toolbar/ToolbarGroup';
// import ToolBar from 'material-ui/Toolbar';
import Search from './containers/Search';
import SearchResult from './containers/SearchResult';
import CompanyDetail from './containers/CompanyDetail';

import './App.css';

interface Props {}

// const requestOptions = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     authorization: 'Basic bEZ5OUdhYVo5akMwOEVNUEE3Sk9uam1oeTNxeTZWUW1semF0Qm1Pbjo='
//   }
// };

// async function getCompanyHouseDetails(searchTerm: string) {
//   const res = await fetch(
//     `https://api.companieshouse.gov.uk/search?q=${searchTerm}`,
//     requestOptions
//   );
//   const json = await res.json();
//   return json;
// }

export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      companies: []
    };
  }

  // componentDidMount() {
  //   getCompanyHouseDetails(this.props.searchTerm).then(response => {
  //     const results = response.items.map((item: CompanyHouseItemApiResponse) => {
  //       return {
  //         name: item.title,
  //         companyNumber: item.company_number
  //       };
  //     });

  //     this.setState({ companies: results });
  //   });
  // }

  render() {
    return (
      <div>
        <Search />
        <SearchResult />
        <CompanyDetail />
      </div>
    );
  }
}
