import React from 'react';
import { connect } from 'react-redux';
import StopForm from './StopForm';
import { deleteStop, togleCompleteStop, editStop } from '../actions';

class Stop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showEditionForm: false };
    }

    render() {
        const { dispatch, stop, number } = this.props;
        if ( this.state.showEditionForm ) {
            return (
                <div className="stop-container">
                    <StopForm stop={stop} onSubmit={(stop) => {
                        dispatch(editStop(stop)).then(() => {
                            this.setState({ showEditionForm: false })
                        });
                    }}/>
                    <div className="buttons">
                        <button onClick={() => this.setState({ showEditionForm: false })}>Cancel</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={`stop-container ${stop.completed ? ' completed' : ''}`}>
                    <div><strong>Stop Number: </strong>{ number }</div>
                    <div><strong>Name: </strong>{ stop.name }</div>
                    <div><strong>Address: </strong>{ stop.address }</div>
                    Complete <input type="checkbox" name="completed" checked={stop.completed} onChange={() => dispatch(togleCompleteStop(stop.id))} />
                    <div className="buttons">
                        {!stop.completed && <button onClick={() => this.setState({ showEditionForm: true })}>Edit</button>}
                        <button onClick={() => {
                            const deleteConfirmation = confirm("Are you sure you want to delete this stop?");
                            if (deleteConfirmation) dispatch(deleteStop(stop.id));
                        }}>Delete</button>
                    </div>
                </div>
            );
        }
    }
}

export default connect()(Stop);
