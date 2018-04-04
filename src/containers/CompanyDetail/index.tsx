import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { getCompanyDetails } from '../../reducers/SearchResultsReducer';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  companyDetail: any;
}

// TODO: 1) Define company detail type and then update across code base
// what do i want to store, everything?
class CompanyDetail extends React.Component<ConnectedProps> {
  render() {
    if (!this.props.companyDetail) {
      return null;
    } else {
      return (
        <>
          {this.props.companyDetail && (
            <>
              <div>{this.props.companyDetail.title}</div>
              <div>{this.props.companyDetail.company_number}</div>

              <div>{this.props.companyDetail.company_status}</div>
              <div>{this.props.companyDetail.company_type}</div>
            </>
          )}
        </>
      );
    }
  }
}

const mapStateToProps = (state: RootState): ConnectedProps => ({
  companyDetail: getCompanyDetails(state, state.selectedCompany)
});

export default connect(mapStateToProps)(CompanyDetail);
