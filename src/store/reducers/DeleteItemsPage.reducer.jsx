import { ADD_DELETED_ITEM, ADD_LIST, CONFIRM_LIST, DELETE_DELETED_ITEM, SELECT_DELETED_ITEM } from "../actions/DeleteItemsPage.action";

import { DELETEDITEMS } from "../../data/deletedItems";

const initialState = { 
    deletedItems: DELETEDITEMS,
    selectedItem: null,
 };

const deletedItemReducer = (state = initialState, action) => { 
    switch (action.type) {
        case "ADD_DELETED_ITEM":
            const newArr = [...state.deletedItems, { id: action.item.id, name: action.item.name }];
            return {
                ...state,
                deletedItems: newArr,
            };
        case "DELETE_DELETED_ITEM":
            const filteredItems = state.deletedItems.filter((item) => item.id !== action.itemId);
            return {
                ...state,
                deletedItems: filteredItems,
            };
        case "SELECT_DELETED_ITEM":
            return {
                ...state,
                selectedItem: action.selectedItem,
            };
        case "SEND_LIST":
            return {
                ...state,
            }
        case ADD_LIST:
            const newPlace = new Place(Date.now(), action.payload.list, action.payload.image)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        default:
            return state;
    }
}

export default deletedItemReducer;