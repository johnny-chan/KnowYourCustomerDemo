import * as React from 'react';
import { CompanyDetail } from './../../Common/types';
import CompanyDetailItem from './../CompanyDetailItem';

interface Props {
  companies: Array<CompanyDetail>;
}

interface State {
  companies: Array<CompanyDetail>;
}
export default class CompanyDetailsList extends React.Component<Props> {
  state: State = {
    companies: []
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    this.setState({
      companies: this.props.companies
    });
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log(`shouldComponentUpdate ${JSON.stringify(nextProps)}`);
    console.log(`shouldComponentUpdate ${JSON.stringify(nextState)}`);

    return true;
  }

  componentWillUpdate(nextProps: Props, nextState: State) {
    console.log(`componentWillUpdate ${JSON.stringify(nextProps)}`);
    console.log(`componentWillUpdate ${JSON.stringify(nextState)}`);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      companies: nextProps.companies
    });
  }

  render() {
    return (
      <>
        {this.state.companies.map((c: CompanyDetail) => (
          <CompanyDetailItem companyName={c.name} companyNumber={c.companyNumber} />
        ))}
      </>
    );
  }
}
