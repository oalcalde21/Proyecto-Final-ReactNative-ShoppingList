import {combineReducers, createStore} from 'redux';

import {deletedItemReducer} from './reducers/DeleteItemsPage.reducer';
import {itemReducer} from './reducers/StartPage.reducer';

const RootReducer = combineReducers({ 
    startPage:itemReducer,
    deletedItemsPage:deletedItemReducer 
});

export default createStore(RootReducer);