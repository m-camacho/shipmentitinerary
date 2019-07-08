import { ADD_STOP_COMPLETED, DELETE_STOP } from '../constants';

export const addStop = (stop) => ({
    type: ADD_STOP_COMPLETED,
    payload: { stop }
});

export const deleteStop = (stopId) => ({
    type: DELETE_STOP,
    payload: { stopId }
});
