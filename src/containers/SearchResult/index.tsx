import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { SelectedCompany, SelectedCompanyAction } from '../../action';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  results: any[];
}

interface DispatchProps {
  SelectedCompany(id: string): SelectedCompanyAction;
}

class SearchResult extends React.Component<ConnectedProps & DispatchProps> {
  constructor(props: ConnectedProps & DispatchProps) {
    super(props);

    this.selectedCompanyOnClickHandler = this.selectedCompanyOnClickHandler.bind(this);
  }

  // tslint:disable-next-line:no-any
  getUniqueKey = (item: any) => {
    return item.company_number;
    // tslint:disable-next-line:semicolon
  };

  // tslint:disable-next-line:no-any
  selectedCompanyOnClickHandler = (e: any) => {
    console.warn('selectedCompany on click handler', e);
    e.preventDefault();

    this.props.SelectedCompany(e.currentTarget.dataset.id);
    // tslint:disable-next-line:semicolon
  };

  // tslint:disable-next-line:no-any
  renderCompanyNameForSelection = (result: any) => (
    <li
      key={result.company_number}
      onClick={this.selectedCompanyOnClickHandler}
      data-id={result.company_number}
    >
      {result.title}
    </li>

    // tslint:disable-next-line:semicolon
  );

  // when company is selected, needs to fire off a dispatch function
  // to update the selectedCompany application state

  render() {
    return (
      <ul>{this.props.results && this.props.results.map(this.renderCompanyNameForSelection)}</ul>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  results: state.searchResults.items
});

const mapDispatchToProps = {
  SelectedCompany
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
