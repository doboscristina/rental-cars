import {
    SEARCH_RESULTS_REQUEST,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
    CLEAR_SEARCH_RESULTS,
    NO_SEARCH_RESULTS,
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

export function clearSearchResults() {
  return (dispatch) => {
    dispatch({
        type: CLEAR_SEARCH_RESULTS,
    });
  }
}

export function noSearchResults() {
  return (dispatch) => {
    dispatch({
        type: NO_SEARCH_RESULTS,
    });
  }
}
