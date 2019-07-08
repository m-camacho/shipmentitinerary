import React from 'react';
import { connect } from 'react-redux';
import StopForm from './StopForm';
import Itinerary from './Itinerary';
import { addStop } from '../actions';

class App extends React.Component {
    render() {
        const { dispatch} = this.props;
        return (
            <div className="app-container">
                <h1>Shipment Itinerary</h1>
                <StopForm buttonLabel="Create New Stop" onSubmit={ (stop) => {
                    console.log(stop);
                    dispatch(addStop(stop));
                }}/>
                <Itinerary></Itinerary>
            </div>
        );
    }
}

export default connect()(App);
