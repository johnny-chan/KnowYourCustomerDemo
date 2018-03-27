import * as React from 'react';
import { connect } from 'react-redux';

import { CompanyHouseSearch } from '../../action/index';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  CompanyHouseSearch: (term: string) => any;
}

interface State {
  searchTerm: string;
}

class Search extends React.Component<ConnectedProps, State> {
  constructor(props: ConnectedProps) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // tslint:disable-next-line:no-any
  onChange(e: React.ChangeEvent<any>) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  // tslint:disable-next-line:no-any
  onFormSubmit(event: any) {
    event.preventDefault();

    // we need to fetch search results
    this.props.CompanyHouseSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        Search for:
        <input
          type="text"
          placeholder="please enter a company to search for"
          onChange={this.onChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  CompanyHouseSearch
};

// tslint:disable-next-line:max-line-length
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// tslint:disable-next-line:no-any
export default connect(null, mapDispatchToProps)(Search as any);
