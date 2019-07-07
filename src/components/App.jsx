import React from 'react';
import StopForm from './StopForm';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>Shipment Itinerary</h1>
                <StopForm buttonLabel="Create New Stop" onSubmit={ (stop) => console.log(stop) }/>
            </div>
        );
    }
}

export default App;
