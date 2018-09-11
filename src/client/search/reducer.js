import {
    SEARCH_RESULTS_REQUEST,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
    CLEAR_SEARCH_RESULTS,
    NO_SEARCH_RESULTS,
} from './constants';

export const resultsInitialState = {
    isFetching: false,
    wasCalled: false,
    error: null,
    results: [],
    noSearchResults: ''
};

export default (state = resultsInitialState, action) => {
 switch (action.type) {
        case SEARCH_RESULTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: null
            });

        case SEARCH_RESULTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                wasCalled: true,
                results: action.payload.results,
                error: null
            });

        case SEARCH_RESULTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });

        case CLEAR_SEARCH_RESULTS:
          return Object.assign({}, resultsInitialState);

        case NO_SEARCH_RESULTS:
            return Object.assign({}, state, {
                wasCalled: false,
                noSearchResults: 'No search results',
            });

        default:
            return state;
    }
}
