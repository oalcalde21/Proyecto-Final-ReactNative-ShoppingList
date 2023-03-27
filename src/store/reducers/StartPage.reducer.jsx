import { ADD_ITEM, DELETE_ITEM, SELECT_ITEM } from "../actions/StartPage.action";

import { ITEMS } from "../../data/items";

const initialState = {
    items: ITEMS,
    selectedItem: null,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log(action.itemText)
            const newArr = [...state.items, { id: Date.now(), name: action.text }];
            return {
                ...state,
                items: newArr,
            };
        case "DELETE_ITEM":
            const filteredItems = state.items.filter((item) => item.id !== action.id);
            console.log(filteredItems);
            return {
                ...state,
                items: filteredItems,
            };
        case "SELECT_ITEM":
            return {
                ...state,
                selectedItem: action.selectedItem,
            };
        default:
            return state;
    }
}

export default itemReducer;
