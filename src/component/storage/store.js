import { AsyncStorage } from 'AsyncStorage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import tempReducer from './tempReducer'

const rootReducer = combineReducers({
    tempReducer : tempReducer
})

const persistConfig = {
    // Root
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'tempReducer',
    ],
    timeout: null,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger(),
    ),
);

const persistor = persistStore(store);

export { store, persistor };