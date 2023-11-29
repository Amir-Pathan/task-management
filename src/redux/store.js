import {createStore,applyMiddleware,combineReducers} from 'redux'
import Thunk from 'redux-thunk'
import Logger, { logger } from 'redux-logger'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunk,logger))


export default store