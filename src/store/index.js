import { combineReducers, applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import auth from './reducer/auth'
import courseDetails from './reducer/courseDetails'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let reducers = combineReducers({
    auth,
    courseDetails
})

const persistConfig = {
  key:'root',
  storage:storage,
  whitelist:['auth','courseDetails'] //only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig,reducers)
let logger = createLogger({ collapsed: true })
let middleware = applyMiddleware(logger)

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  middleware = window.__REDUX_DEVTOOLS_EXTENSION__()
  
let store = createStore(persistedReducer, middleware)


export default store