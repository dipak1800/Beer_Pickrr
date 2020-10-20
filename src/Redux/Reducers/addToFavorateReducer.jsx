import { ADD_TO_FAVORATE } from '../Actions/ActionsConstants/addToFavorateActionConstant';
import { AddToFavorateInitialState } from './InitialState/addToFavorateInitialState';

const AddToFavourateReducer = (state = AddToFavorateInitialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORATE: return {
            allFavourateBeers: [...state.allFavourateBeers, action.payload]
        };
        default: return state;
    }
};
export default AddToFavourateReducer