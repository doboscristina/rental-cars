import {
    SEARCH_RESULTS_REQUEST,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
} from './constants';

export function loadSearchResults(keys) {
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULTS_REQUEST,
        });
        return fetch(`/api/locations/${keys}`)
        .then(res => res.json())
        .then(results => {
          dispatch({
              type: SEARCH_RESULTS_SUCCESS,
              payload: results,
          });
        })
        .catch((error) => {
            dispatch({
                type: SEARCH_RESULTS_FAILURE,
                error,
            });
        });
    };
}
