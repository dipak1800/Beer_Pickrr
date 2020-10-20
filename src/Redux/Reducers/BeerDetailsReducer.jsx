import { FETCH_BEER_DETAILS, FETCH_BEER_DETAILS_SUCCESS, FETCH_BEER_DETAILS_FAILURE } from '../Actions/ActionsConstants/BeerDetailsActionConstant';
import { BeerDetailsInitialState } from './InitialState/BeerDetailsInitialState';
const BeerDetailsReducer = (state = BeerDetailsInitialState, action) => {
    switch (action.type) {
        case FETCH_BEER_DETAILS: return {
            ...state,
            loading: true
        }
        case FETCH_BEER_DETAILS_SUCCESS: return {

            loading: false,
            Beer: action.payload,
            errMessage: ''

        }
        case FETCH_BEER_DETAILS_FAILURE: return {

            loading: false,
            Beer: [],
            errMessage: action.payload

        }
        default: return state
    }
}
export default BeerDetailsReducer;