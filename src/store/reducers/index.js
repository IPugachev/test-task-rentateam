import { combineReducers } from 'redux'
import { basketReducer } from './basketReducer'
import { categoryReducer } from './categoryReducer'
import { deliveryReducer } from './deliveryReducer'
import { productReducer } from './productReducer'

export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  basket: basketReducer,
  delivery: deliveryReducer,
})
