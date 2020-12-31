import ticketsReducer from '../reducers/ticketsReducers'

import { applyMiddleware, createStore, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const allReducers = combineReducers({
  ticketsReducer,
})

export const store = createStore(allReducers, applyMiddleware(logger, thunk))
