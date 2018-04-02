import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { getCompanyDetails } from '../../reducers/SearchResultsReducer';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  companyDetail: any;
}

// TODO: 5)render companyDetail data
// TODO: 6)create Address component and use companyDetail.address as props
class CompanyDetail extends React.Component<ConnectedProps> {
  render() {
    return <div>DETAILS</div>;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    companyDetail: getCompanyDetails(state)
  };
};

// tslint:disable-next-line:no-any
export default connect(mapStateToProps)(CompanyDetail as any);
