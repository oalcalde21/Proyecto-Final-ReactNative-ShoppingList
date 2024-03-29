import { ADD_DELETED_ITEM, ADD_LIST, CONFIRM_LIST, DELETE_DELETED_ITEM, SELECT_DELETED_ITEM } from "../actions/DeleteItemsPage.action";

import { DELETEDITEMS } from "../../data/deletedItems";
import List from '../../models/List';

const initialState = { 
    deletedItems: DELETEDITEMS,
    selectedItem: null,
    list: [],
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
            return {
                ...state,
                deletedItems: [],
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
            const newList = new List(Date.now(), action.payload.list, action.payload.list.image)
            return {
                ...state,
                list: state.list.concat(newList),
            }
        default:
            return state;
    }
}

export default deletedItemReducer;