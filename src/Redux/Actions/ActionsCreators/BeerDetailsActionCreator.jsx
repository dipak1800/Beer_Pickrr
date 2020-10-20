import { FETCH_BEER_DETAILS, FETCH_BEER_DETAILS_FAILURE, FETCH_BEER_DETAILS_SUCCESS } from '../ActionsConstants/BeerDetailsActionConstant';
import axios from 'axios';

const fetchBeerDetails = () => {
    return {
        type: FETCH_BEER_DETAILS
    }
}

const fetchBeerDetailsSuccess = (Beer) => {
    return {
        type: FETCH_BEER_DETAILS_SUCCESS,
        payload: Beer
    }
}

const fetchBeerDetailsFailure = (err) => {
    return {
        type: FETCH_BEER_DETAILS_FAILURE,
        payload: err
    }
};

const getBeerDetails = (uniqueId) => {
    return dispatch => {
        dispatch(fetchBeerDetails);
        axios.get(`https://api.punkapi.com/v2/beers?ids=${uniqueId}`).then(response => {
            dispatch(fetchBeerDetailsSuccess(response.data))
        }).catch(err => {
            dispatch(fetchBeerDetailsFailure(err.message));
            alert(err.message)
        })
    }
}
export default getBeerDetails;