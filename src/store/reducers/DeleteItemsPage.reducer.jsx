import { ADD_DELETED_ITEM, CONFIRM_LIST, DELETE_DELETED_ITEM, SELECT_DELETED_ITEM } from "../actions/DeleteItemsPage.action";

import { DELETEDITEMS } from "../../data/deletedItems";

const initialState = { 
    deletedItems: DELETEDITEMS,
    selectedItem: null,
 };

const deletedItemReducer = (state = initialState, action) => { 
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                list: action.orders
            }
        default:
            return state;
    }
}

export default deletedItemReducer;