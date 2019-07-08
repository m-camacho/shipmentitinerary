import cloneDeep from 'lodash/cloneDeep';
import uuid from 'uuid';
import { ADD_STOP_COMPLETED, DELETE_STOP } from '../constants';

const defaultState = {
    stops: [],
};

const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_STOP_COMPLETED: {
            const newState = cloneDeep(state);
            newState.stops.push({
                id: uuid(),
                name: action.payload.stop.name,
                address: action.payload.stop.address,
                completed: false
            });
            return newState;
        }
        case DELETE_STOP: {
            console.log(action.payload);
            const newState = cloneDeep(state);
            newState.stops = newState.stops.filter(stop => stop.id !== action.payload.stopId);
            return newState;
        }
        default:
            return state;
    }
};

export default appReducer;