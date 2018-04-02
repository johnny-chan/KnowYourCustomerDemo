import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { getCompanyDetails } from '../../reducers/SearchResultsReducer';

interface ConnectedProps {
  selectedCompany: string;
  // tslint:disable-next-line:no-any
  companyDetail: any;
}

// TODO: 5)render companyDetail data
// TODO: 6)create Address component and use companyDetail.address as props
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

const mapStateToProps = (state: RootState) => ({
  selectedCompany: state.selectedCompany,
  companyDetail: getCompanyDetails(state, state.selectedCompany)
});

// tslint:disable-next-line:no-any
export default connect(mapStateToProps)(CompanyDetail as any);
