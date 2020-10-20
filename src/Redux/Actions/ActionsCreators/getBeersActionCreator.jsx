import { FETCH_BEERS, FETCH_BEERS_FAILURE, FETCH_BEERS_SUCCESS } from '../ActionsConstants/getBeersActionConstant';
import axios from 'axios';

const fetchBeers = () => {
    return {
        type: FETCH_BEERS
    }
}

const fetchBeersSuccess = (Beers) => {
    return {
        type: FETCH_BEERS_SUCCESS,
        payload: Beers
    }
}

const fetchBeersFailure = (err) => {
    return {
        type: FETCH_BEERS_FAILURE,
        payload: err
    }
};

const getAllBeers = (pagenumber, prevBeers) => {
    return dispatch => {
        dispatch(fetchBeers);
        axios.get(`https://api.punkapi.com/v2/beers?page=${pagenumber}&per_page=${21}`).then(response => {
            // console.log(response.data);
            if (pagenumber > 1) {

                dispatch(fetchBeersSuccess([...prevBeers, ...response.data]))
            } else {
                dispatch(fetchBeersSuccess(response.data))
            }

        }).catch(err => {
            dispatch(fetchBeersFailure(err.message))
        })
    }
}
export default getAllBeers;