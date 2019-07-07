import React from 'react';
import UpsertStop from './UpsertStop';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>Shipment Itinerary</h1>
                <UpsertStop/>
            </div>
        );
    }
}

export default App;
