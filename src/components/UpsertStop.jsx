import React from 'react';

class UpsertStop extends React.Component {
    render() {
        return (
            <div className="upsert-stop-form">
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <button>Create a new Stop</button>
            </div>
        );
    }
}

export default UpsertStop;
