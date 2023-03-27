export const ADD_DELETED_ITEM = "ADD_DELETED_ITEM";
export const DELETE_DELETED_ITEM = "DELETE_DELETED_ITEM";
export const SELECT_DELETED_ITEM = "SELECT_DELETED_ITEM";

export const addDeletedItem = (item) => ({
  type: ADD_DELETED_ITEM,
  item: item,
});

export const deleteDeletedItem = (itemId, item) => ({
    type: DELETE_DELETED_ITEM,
    id: itemId,
    item: item,
});

export const selectDeletedItem = (selectedItem) => ({
    type: SELECT_DELETED_ITEM,
    item: selectedItem,
});
