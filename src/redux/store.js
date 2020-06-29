import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./rootReducer"

// const middlewares = [thunk]

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
      applyMiddleware(...middlewares)
    ));

// sagaMiddleware.run()


//export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }