import { ADD_TO_FAVORATE, REMOVE_FROM_FAVOURATE } from '../Actions/ActionsConstants/addToFavorateActionConstant';
import { AddToFavorateInitialState } from './InitialState/addToFavorateInitialState';

const AddToFavourateReducer = (state = AddToFavorateInitialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORATE: return {
            allFavourateBeers: [...state.allFavourateBeers, action.payload]
        };
        case REMOVE_FROM_FAVOURATE: return {
            allFavourateBeers: state.allFavourateBeers.filter(beer => beer.id !== action.payload)
        };
        default: return state;
    }
};
export default AddToFavourateReducer