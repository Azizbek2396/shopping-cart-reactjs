import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartReducer';
import storeReducer from './store/storeReducer';

export const rootReducer = combineReducers({
    products: storeReducer,
    items: cartReducer
})