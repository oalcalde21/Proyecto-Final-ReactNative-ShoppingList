export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SELECT_ITEM = "SELECT_ITEM";

export const addItem = (itemText) => ({
  type: ADD_ITEM,
  text: itemText,
});

export const deleteItem = (itemId, item) => ({
    type: DELETE_ITEM,
    id: itemId,
    item: item,
});

export const selectItem = (selectedItem) => ({
    type: SELECT_ITEM,
    item: selectedItem,
});

