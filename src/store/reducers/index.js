import { combineReducers } from 'redux'
import { basketReducer } from './basketReducer'
import menuReducer from './menuReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
  basket: basketReducer,
  ui: uiReducer,
  menu: menuReducer,
})
