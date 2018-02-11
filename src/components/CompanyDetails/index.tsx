import * as React from 'react';

interface Props {
    companyName: string;
    companyNumber: string;
}

interface State {
    name: string;
    number: string;
}

class CompanyDetails extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            name : this.props.companyName, 
            number: this.props.companyNumber
        };
    }

    render() {
        return (
            <div>
                <div>
                    Company Details
                </div>
                <div>
                    {this.state.name}
                </div>
                <div>
                    {this.state.number
                }</div>    
            </div>
            
        );
    }
}

export default CompanyDetails;