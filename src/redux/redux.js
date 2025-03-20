// ReduxSingleton.js

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initial state
const initialState = {
  Name: '',
  UserId: '',
  Pass:'',

};

// Action creators
export const setName = (val) => store.dispatch({ type: 'SET_NAME', payload: val, });
export const setUserId = (val) => store.dispatch({ type: 'SET_USER_ID', payload: val, });
export const setPass = (val) => store.dispatch({ type: 'SET_PASS', payload: val, });


export const getName = () => { return store.getState().Name; };
export const getUserId = () => { return store.getState().UserId; };
export const getPass = () => { return store.getState().Pass; };

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME': return { ...state, Name: action.payload, };
    case 'SET_USER_ID': return { ...state, UserId: action.payload, };
    case 'SET_PASS': return { ...state, Pass: action.payload, };


    default: return state;
  }
};

// Configuring AsyncStorage as the storage engine
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Creating persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create Redux store with persisted reducer
const store = createStore(persistedReducer);

// Persist the store
const persistor = persistStore(store);

export { store, persistor };
