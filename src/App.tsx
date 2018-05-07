import * as React from 'react';

import Header from './components/header';
import Search from './containers/Search';
// import Footer from './components/footer';

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
        {/* <Footer /> */}
      </>
    );
  }
}
