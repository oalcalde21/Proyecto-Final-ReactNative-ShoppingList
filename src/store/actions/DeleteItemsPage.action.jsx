import { API_URL } from '../../constants/Database';

export const ADD_DELETED_ITEM = "ADD_DELETED_ITEM";
export const DELETE_DELETED_ITEM = "DELETE_DELETED_ITEM";
export const SELECT_DELETED_ITEM = "SELECT_DELETED_ITEM";
export const CONFIRM_LIST = "CONFIRM_LIST";

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

export const sendList =(list) => {
  return async dispatch => {
      try {
          
          const response = await fetch(API_URL+'lists.json', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  date: new Date(),
                  list: list
              }),
          });

          const result = await response.json();
          console.log(result);
          dispatch({
              type: CONFIRM_LIST,
              confirm: true
          });
      } catch (error) {
          console.error(error)
      }
  }
}
