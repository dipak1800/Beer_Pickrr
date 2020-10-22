import { FETCH_BEERS_BY_NAME, FETCH_BEERS_BY_NAME_FAILURE, FETCH_BEERS_BY_NAME_SUCCESS, CANCEL_SEARCH } from '../ActionsConstants/getBeersByNameActionConstant';
import axios from 'axios';
import swal from 'sweetalert'
const fetchBeersByName = () => {
    return {
        type: FETCH_BEERS_BY_NAME
    }
}

const fetchBeersByNameSuccess = (Beers) => {
    return {
        type: FETCH_BEERS_BY_NAME_SUCCESS,
        payload: Beers
    }
}

const fetchBeersByNameFailure = (err) => {
    return {
        type: FETCH_BEERS_BY_NAME_FAILURE,
        payload: err
    }
};

export const cancelSearch = () => {
    return {
        type: CANCEL_SEARCH
    }
}
const getBeersByName = (usersearched) => {
    return dispatch => {
        dispatch(fetchBeersByName);
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${usersearched}`).then(response => {
            dispatch(fetchBeersByNameSuccess(response.data));
            // console.log(response.data);
            if (response.data.length <= 0) {
                swal("Invalid Search!", `No Results Found for your search 👉 ${usersearched}`, "warning");
            }

        }).catch(err => {
            dispatch(fetchBeersByNameFailure(err.message))
            alert(err.message);
        })
    }
}
export default getBeersByName;