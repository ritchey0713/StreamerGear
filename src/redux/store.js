import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

const middlewares = [thunk, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
      applyMiddleware(...middlewares)
    ));


//export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }