export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const AddItem = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}

export const RemoveItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}