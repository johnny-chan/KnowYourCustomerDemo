import * as React from 'react';
// import Paper from 'material-ui/Paper';
// import { Card, CardText } from 'material-ui/Card';
// import ToolBarGroup from 'material-ui/Toolbar/ToolbarGroup';
// import ToolBar from 'material-ui/Toolbar';
import Header from './components/header';
import Search from './containers/Search';
import Footer from './components/footer';

// import SearchResult from './containers/SearchResult';
// import CompanyDetail from './containers/CompanyDetail';

// import './App.css';

interface Props {}

export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Search />
        <Footer />
      </>
    );
  }
}
