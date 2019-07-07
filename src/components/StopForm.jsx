import React from 'react';
import PropTypes from 'prop-types';

class StopForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            address: props.address ||  ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitStop = this.submitStop.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitStop() {
        const { name, address } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ name,  address});
    }

    render() {
        const { buttonLabel } = this.props;
        return (
            <div className="upsert-stop-form">
                <div>
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div>
                    Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                </div>
                <button onClick={this.submitStop}>{ buttonLabel }</button>
            </div>
        );
    }
}

StopForm.propTypes = {
    buttonLabel: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

StopForm.defaultProps = {
    buttonLabel: 'Submit'
};

export default StopForm;
