import * as React from 'react';
// import { Base64 } from 'js-base64';

import './App.css';

const logo = require('./logo.svg');

// const apiKey: string = 'lFy9GaaZ9jC08EMPA7JOnjmhy3qy6VQmlzatBmOn';

interface Props {
  searchTerm: string; 
}

interface State {

  // tslint:disable-next-line:no-any
  companies: any[]; 
}

const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    // authorization: `BASIC ${Base64.encode(apiKey)}`
    authorization: 'Basic bEZ5OUdhYVo5akMwOEVNUEE3Sk9uam1oeTNxeTZWUW1semF0Qm1Pbjo=',
  }  
}; 

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

  }

  async componentDidMount() {
    const response = await fetch(`https://api.companieshouse.gov.uk/search?q=${this.props.searchTerm}`, requestOptions);

    const result = await response.json();

    this.setState( { companies: result.items});

    // tslint:disable-next-line:no-console
    console.log('companies:' + JSON.stringify(this.state.companies));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
