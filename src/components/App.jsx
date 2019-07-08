import React from 'react';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import StopForm from './StopForm';
import Itinerary from './Itinerary';
import { addStop } from '../actions';

class App extends React.Component {
    render() {
        const { dispatch, loading } = this.props;
        return (
            <LoadingOverlay
                active={loading}
                spinner
                text='Validating your address...'
            >
                <div className="app-container">
                    <h1>Shipment Itinerary</h1>
                    <StopForm buttonLabel="Create New Stop" onSubmit={ (stop) => {
                        console.log(stop);
                        dispatch(addStop(stop));
                    }}/>
                    <Itinerary></Itinerary>
                </div>
            </LoadingOverlay>
        );
    }
}

export default connect(({ loading }) => ({ loading }))(App);
