import { combineReducers } from 'redux'
import { basketReducer } from './basketReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
  basket: basketReducer,
  ui: uiReducer,
})
