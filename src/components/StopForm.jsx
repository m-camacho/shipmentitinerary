import React from 'react';
import PropTypes from 'prop-types';

class StopForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.stop ? {
            id: props.stop.id,
            name: props.stop.name,
            address: props.stop.address,
        } : {
            name: '',
            address: '',
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
        const { id, name, address } = this.state;
        const { onSubmit } = this.props;
        const stop = { name,  address };
        if (id) stop.id = id;
        if (!name) {
            alert('Stop name is required.');
            return;
        }
        if (!address) {
            alert('Stop address is required.');
            return;
        }
        if (address && address.length <= 3) {
            alert('Please provide a more accurate address.');
            return;
        }
        onSubmit(stop);
    }

    render() {
        const { buttonLabel } = this.props;
        return (
            <div className="stop-form">
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
