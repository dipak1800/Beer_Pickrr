import { FETCH_BEERS_FAILURE, FETCH_BEERS_SUCCESS, FETCH_BEERS } from '../Actions/ActionsConstants/getBeersActionConstant';
import { BeersInitialState } from './InitialState/BeersInitialState';
const BeersReducer = (state = BeersInitialState, action) => {
    switch (action.type) {
        case FETCH_BEERS: return {
            ...state,
            loading: true
        }
        case FETCH_BEERS_SUCCESS: return {

            loading: false,
            Beers: action.payload,
            errMessage: ''

        }
        case FETCH_BEERS_FAILURE: return {

            loading: false,
            Beers: [],
            errMessage: action.payload

        }
        default: return state
    }
}
export default BeersReducer;