import {
    SEARCH_RESULTS_REQUEST,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
} from './constants';

export default (state = {results: []}, action) => {
 switch (action.type) {
        case SEARCH_RESULTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: null
            });

        case SEARCH_RESULTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                results: action.payload.results.docs,
                error: null
            });

        case SEARCH_RESULTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });

        default:
            return state;
    }
}
