import { ADD_TO_FAVORATE } from '../ActionsConstants/addToFavorateActionConstant';

export const addToFavourate = (allData) => {
    return {
        type: ADD_TO_FAVORATE,
        payload: allData
    }


}