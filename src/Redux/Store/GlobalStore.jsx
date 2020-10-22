import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import BeersReducer from '../Reducers/BeersReducer';
import addToFavorateReducer from '../Reducers/addToFavorateReducer';
import BeerDetailsReducer from '../Reducers/BeerDetailsReducer';
import GetBeersByNameReducer from '../Reducers/GetBeersByNameReducer'
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["BeersReducer", "addToFavorateReducer", "BeerDetailsReducer", "GetBeersByNameReducer"]
}

const allReducers = combineReducers({
    BeersReducer, addToFavorateReducer, BeerDetailsReducer, GetBeersByNameReducer,
})

let GlobalStore = createStore(persistReducer(persistConfig, allReducers), composeWithDevTools(applyMiddleware(logger, thunk)));

export const persistor = persistStore(GlobalStore)
export default GlobalStore;