import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './components/hello.css';
// import Hello from './hello';
// import ComanyDetails from './components/CompanyDetails';

ReactDOM.render(
  <MuiThemeProvider>
    <App searchTerm="chan" />
  </MuiThemeProvider>,
  // <ComanyDetails companyName="JC Limited" companyNumber="AB-1234" />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
