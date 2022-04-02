import { combineReducers } from 'redux'
import { basketReducer } from './basketReducer'
import { categoryReducer } from './categoryReducer'
import { productReducer } from './productReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  basket: basketReducer,
  ui: uiReducer,
})
