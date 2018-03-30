import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';

interface ConnectedProps {
  // tslint:disable-next-line:no-any
  results: any[];
}

class SearchResult extends React.Component<ConnectedProps> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results &&
            this.props.results.map((result: { title: string }) => (
              <tr key="result.company_name">{result.title}</tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  results: state.searchResults.items
});

// tslint:disable-next-line:no-any
export default connect(mapStateToProps)(SearchResult as any);
