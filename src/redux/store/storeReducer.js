import {
    LOAD_PRODUCTS_BEGIN,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR
} from './storeActions'

const initialState = {
    productsLoading: false,
    productsError: null,
    products: []
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS_BEGIN:
            state.productsLoading = true;
            return state;
        case LOAD_PRODUCTS_SUCCESS:
            state.productsLoading = false;
            state.products = action.payload;
            return state;
        case LOAD_PRODUCTS_ERROR:
            state.productsError = action.error;
            state.productsLoading = false;
            return state;
        default:
            return state;
    }
}

export default storeReducer;