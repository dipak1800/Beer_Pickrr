import { ADD_TO_FAVORATE, REMOVE_FROM_FAVOURATE } from '../ActionsConstants/addToFavorateActionConstant';

export const addToFavourate = (allData) => {
    return {
        type: ADD_TO_FAVORATE,
        payload: allData
    }


}
export const removeFromFavourate = (id) => {
    return {
        type: REMOVE_FROM_FAVOURATE,
        payload: id
    }


}