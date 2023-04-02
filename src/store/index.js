import {applyMiddleware, combineReducers, createStore} from 'redux';

import deletedItemReducer from './reducers/DeleteItemsPage.reducer';
import historyLoaderReducer from './reducers/HistoryLoader.reducer';
import itemReducer from './reducers/StartPage.reducer';
import logInReducer from './reducers/LogIn.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({ 
    startPage:itemReducer,
    deletedItemsPage:deletedItemReducer,
    historyLoader:historyLoaderReducer,
    logIn:logInReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));