import { FETCH_BEERS_BY_NAME, FETCH_BEERS_BY_NAME_SUCCESS, FETCH_BEERS_BY_NAME_FAILURE, CANCEL_SEARCH } from '../Actions/ActionsConstants/getBeersByNameActionConstant';
import { getBeersByNameInitialState } from './InitialState/getBeersByNameInitialState';
const GetBeersByNameReducer = (state = getBeersByNameInitialState, action) => {
    switch (action.type) {
        case FETCH_BEERS_BY_NAME: return {
            ...state,
            loading: true
        };
            break;
        case FETCH_BEERS_BY_NAME_SUCCESS: return {

            loading: false,
            Beers: action.payload,
            errMessage: ''

        };
            break;

        case FETCH_BEERS_BY_NAME_FAILURE: return {

            loading: false,
            Beers: [],
            errMessage: action.payload

        };
            break;

        case CANCEL_SEARCH: return {

            loading: false,
            Beers: [],
            errMessage: ""
        };
            break;

        default: return state
    }
}
export default GetBeersByNameReducer;