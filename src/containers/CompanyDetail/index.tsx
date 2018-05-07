import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';

import { CompanyDetail as CompanyDetailType } from '../../common/types';
import { getCompanyDetails } from '../../reducers/SearchResultsReducer';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  companyDetail?: CompanyDetailType;
}

class CompanyDetail extends React.Component<ConnectedProps> {
  render() {
    if (!this.props.companyDetail) {
      return null;
    } else {
      return (
        <>
          {this.props.companyDetail && (
            <>
              <div>{this.props.companyDetail.name}</div>
              <div>{this.props.companyDetail.companyNumber}</div>

              <div>{this.props.companyDetail.status}</div>
              <div>{this.props.companyDetail.type}</div>
              <div>{this.props.companyDetail.createdDate}</div>
              <div>{this.props.companyDetail.endDate}</div>
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
