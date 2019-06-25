import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];

if (__DEV__) {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);