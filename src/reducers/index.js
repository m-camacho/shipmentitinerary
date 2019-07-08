import uuid from 'uuid';
import cloneDeep from 'lodash/cloneDeep';
import {
    ADD_STOP_STARTED,
    ADD_STOP_COMPLETED,
    DELETE_STOP,
    ADD_STOP_FAILED,
    TOGLE_COMPLETE_STOP,
} from '../constants';

const defaultState = {
    stops: [],
    loading: false,
};

const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_STOP_STARTED: {
            const newState = cloneDeep(state);
            newState.loading = true;
            return newState;
        }
        case ADD_STOP_COMPLETED: {
            const newState = cloneDeep(state);
            newState.stops.push({
                id: uuid(),
                name: action.payload.stop.name,
                address: action.payload.stop.address,
                completed: false
            });
            newState.loading = false;
            return newState;
        }
        case ADD_STOP_FAILED: {
            const newState = cloneDeep(state);
            newState.loading = false;
            return newState;
        }
        case DELETE_STOP: {
            const newState = cloneDeep(state);
            newState.stops = newState.stops.filter(stop => stop.id !== action.payload.stopId);
            return newState;
        }
        case TOGLE_COMPLETE_STOP: {
            const newState = cloneDeep(state);
            const stop = newState.stops.find(stop => stop.id === action.payload.stopId);
            stop.completed = !stop.completed;
            return newState;
        }
        default:
            return state;
    }
};

export default appReducer;
