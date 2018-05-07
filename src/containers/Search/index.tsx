import * as React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import { CompanyHouseSearch } from '../../action/';
import SearchResult from '../SearchResult/';
import SelectedCompanyDetails from '../CompanyDetail';

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
      <Grid container={true}>
        <Grid item={true} xs={4}>
          <form onSubmit={this.onFormSubmit}>
            <TextField
              id="search"
              label="Find company"
              onChange={this.onChange}
              type="search"
              margin="normal"
            />
            <Button type="submit">search</Button>
          </form>
        </Grid>
        <Grid item={true} xs={4}>
          <SearchResult />
        </Grid>
        <Grid item={true} xs={4}>
          <SelectedCompanyDetails />
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  CompanyHouseSearch
};

// tslint:disable-next-line:max-line-length
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
export default connect(null, mapDispatchToProps)(Search);
