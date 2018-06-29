import * as React from 'react';
import { connect } from 'react-redux';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { RootState } from '../../reducers';
import { SelectedCompany, SelectedCompanyAction } from '../../action';

import { CompanyDetail } from '../../common/types';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  results: CompanyDetail[];
}

interface DispatchProps {
  SelectedCompany(id: string): SelectedCompanyAction;
}

class SearchResult extends React.Component<ConnectedProps & DispatchProps> {
  constructor(props: ConnectedProps & DispatchProps) {
    super(props);

    this.selectedCompanyOnClickHandler = this.selectedCompanyOnClickHandler.bind(this);
  }

  getUniqueKey = (item: CompanyDetail) => {
    return item.companyNumber;
  };

  // tslint:disable-next-line:no-any
  selectedCompanyOnClickHandler = (e: any) => {
    console.warn('selectedCompany on click handler', e);
    e.preventDefault();

    this.props.SelectedCompany(e.currentTarget.dataset.id);
  };

  renderResults = (result: CompanyDetail) => (
    <ListItem
      button={true}
      key={result.companyNumber}
      onClick={this.selectedCompanyOnClickHandler}
      data-id={result.companyNumber}
    >
      <ListItemText primary={result.name} />
    </ListItem>
  );

  // when company is selected, needs to fire off a dispatch function
  // to update the selectedCompany application state

  render() {
    return (
      <div>
        <List>{this.props.results && this.props.results.map(this.renderResults)}</List>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  results: state.searchResults.items
});

const mapDispatchToProps = {
  SelectedCompany
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);
