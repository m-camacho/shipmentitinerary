import React from 'react';
import { connect } from 'react-redux';

import Stop from './Stop';
import { addStop } from '../actions';

class Itinerary extends React.Component {
    render() {
        const { dispatch, stops } = this.props;
        if (stops.length === 0) return null;
        return (
            <div className="itinerary">
                <h3>You should complete the following stops</h3>
                {stops.map((stop, index) => <Stop key={stop.id} stop={stop} number={index + 1} />)}
            </div>
        );
    }
}

const mapStateToProps = ({ stops }) => ({ stops });

export default connect(mapStateToProps)(Itinerary);
