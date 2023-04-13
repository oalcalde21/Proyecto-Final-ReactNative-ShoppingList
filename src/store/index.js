import {applyMiddleware, combineReducers, createStore} from 'redux';
import { persistReducer, persistStore } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage';
import deletedItemReducer from './reducers/DeleteItemsPage.reducer';
import historyLoaderReducer from './reducers/HistoryLoader.reducer';
import itemReducer from './reducers/StartPage.reducer';
import logInReducer from './reducers/LogIn.reducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

const RootReducer = combineReducers({ 
    startPage:itemReducer,
    deletedItemsPage:deletedItemReducer,
    historyLoader:historyLoaderReducer,
    logIn:logInReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);