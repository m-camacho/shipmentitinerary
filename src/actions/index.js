import {
    ADDRESS_API_SERVER_NAME,
    ADD_STOP_STARTED,
    ADD_STOP_COMPLETED,
    DELETE_STOP,
    ADD_STOP_FAILED,
    TOGLE_COMPLETE_STOP,
} from '../constants';

export const addStop = (stop) => {
    return dispatch => {
        dispatch(addStopStarted());
        let requestUrl = `https://${ADDRESS_API_SERVER_NAME}/v2/locations/addresses/validate/`;
        fetch(requestUrl, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
                "formatted_address": stop.address
            }),
        }).then(response => {
            if (!response.ok) throw new Error('Invalid address');
            return response.json();
        })
        .then(response => {
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
