import * as React from 'react';
import { connect } from 'react-redux';

import { CompanyDetail } from '../../common/types';
import { CompanyHouseSearch } from '../../action/';
import { RootState } from '../../reducers';

interface Props {
  term: string;
}

interface ConnectedProps {
  searchResults: CompanyDetail[];
  // tslint:disable-next-line:no-any
  runSearch(term: string): any;
}

type SearchChildProps = {
  searchResults: CompanyDetail[];
  runSearch(term: string): Promise<void>;
};

// to dispatch a search from a given search term
class SearchContainer extends React.PureComponent<Props & ConnectedProps> {
  render() {
    const { runSearch, searchResults } = this.props;
    const childrenAsFn = this.props.children as (props: SearchChildProps) => React.ReactNode;

    return <>{childrenAsFn({ runSearch, searchResults })}</>;
  }
}

const mapStateToProps = (state: RootState) => ({
  searchResults: state.searchResults.items
});

const mapDispatchToProps = {
  runSearch: CompanyHouseSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
