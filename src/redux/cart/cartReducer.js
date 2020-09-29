import { ADD_ITEM, REMOVE_ITEM } from './cartActions';

const initialState = {
    items: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            if (state.items.some(i => i.id === action.id)) {
                state.items.find(i => i.id === action.id).count++;
            } else {
                state.items.push(
                    {
                        id: action.id,
                        count: 1
                    }
                )
            }
            return state;
        case REMOVE_ITEM:
            if (state.items.find(i => i.id === action.id).count > 1) {
                state.items.find(i => i.id === action.id).count--;
            } else {
                alert('removed');
                state.items.filter(i => i.id !== action.id);
            }
            return state;
        default:
            return state;
    }
}