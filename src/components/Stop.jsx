import React from 'react';
import { connect } from 'react-redux';
import StopForm from './StopForm';
import { deleteStop } from '../actions';

class Stop extends React.Component {
    render() {
        const { dispatch, stop, number } = this.props;
        return (
            <div className="stop-container">
                <div><strong>Stop Number: </strong>{ number }</div>
                <div><strong>Name: </strong>{ stop.name }</div>
                <div><strong>Address: </strong>{ stop.address }</div>
                <div className="buttons">
                    <button onClick={() => {
                        const deleteConfirmation = confirm("Are you sure you want to delete this stop?");
                        if (deleteConfirmation) dispatch(deleteStop(stop.id));
                    }}>Delete</button>
                </div>
            </div>
        );
    }
}

export default connect()(Stop);
