import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import BeersReducer from '../Reducers/BeersReducer';
import addToFavorateReducer from '../Reducers/addToFavorateReducer';
import BeerDetailsReducer from '../Reducers/BeerDetailsReducer';
const allReducers = combineReducers({
    BeersReducer, addToFavorateReducer, BeerDetailsReducer
})

const GlobalStore = createStore(allReducers, composeWithDevTools(applyMiddleware(logger, thunk)));
export default GlobalStore;