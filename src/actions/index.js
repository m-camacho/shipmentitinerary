import {
    ADDRESS_API_SERVER_NAME,
    ADD_STOP_STARTED,
    ADD_STOP_COMPLETED,
    ADD_STOP_FAILED,
    DELETE_STOP,
    TOGLE_COMPLETE_STOP,
    EDIT_STOP_STARTED,
    EDIT_STOP_COMPLETED,
    EDIT_STOP_FAILED,
} from '../constants';

const validateAddress = (address) => {
    let requestUrl = `https://${ADDRESS_API_SERVER_NAME}/v2/locations/addresses/validate/`;
    return fetch(requestUrl, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            "formatted_address": address
        }),
    }).then(response => {
        if (!response.ok) throw new Error('Invalid address');
        return response.json();
    })
};

export const addStop = (stop) => {
    return dispatch => {
        dispatch(addStopStarted());
        validateAddress(stop.address).then(response => {
            dispatch(addStopCompleted({
                name: stop.name,
                address: response.geocoded_address.formatted_address
            }));
        })
        .catch(error => { 
            console.log('Error Happened!!');
            console.log(error);
            alert('Invalid address. Please try another.')
            dispatch(addStopFailed());
        });
    }
};

export const addStopStarted = () => ({
    type: ADD_STOP_STARTED
});

export const addStopCompleted = (stop) => ({
    type: ADD_STOP_COMPLETED,
    payload: { stop }
});

export const addStopFailed = () => ({
    type: ADD_STOP_FAILED
});

export const deleteStop = (stopId) => ({
    type: DELETE_STOP,
    payload: { stopId }
});

export const togleCompleteStop = (stopId) => ({
    type: TOGLE_COMPLETE_STOP,
    payload: { stopId }
});

export const editStop = (stop) => {
    return dispatch => {
        dispatch(editStopStarted());
        return validateAddress(stop.address).then(response => {
            dispatch(editStopCompleted({
                id: stop.id,
                name: stop.name,
                address: response.geocoded_address.formatted_address
            }));
        })
        .catch(error => { 
            console.log('Error Happened!!');
            console.log(error);
            alert('Invalid address. Please try another.')
            dispatch(editStopFailed());
        });
    }
};

export const editStopStarted = () => ({
    type: EDIT_STOP_STARTED
});

export const editStopCompleted = (stop) => ({
    type: EDIT_STOP_COMPLETED,
    payload: { stop }
});

export const editStopFailed = () => ({
    type: EDIT_STOP_FAILED
});
