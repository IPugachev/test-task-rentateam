import { basketActions } from '../actions/basketActions'

const initialState = {
  totalPrice: 0,
  products: [],
  delivery: true,
}

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActions.ADD_PRODUCT_TO_BASKET:
      state.totalPrice += action.payload.product.price
      state.products.push(action.payload.product)
      return state
    case basketActions.REMOVE_PRODUCT_FROM_BASKET:
      let index = state.products.indexOf(action.payload.product)
      if (index !== -1) {
        state.totalPrice -= action.payload.product.price
        state.products.splice(index, 1)
      }
      return state
    case basketActions.CLEAR_BASKET:
      state.totalPrice = 0
      state.products = []
      return state
    case basketActions.TOGGLE_DELIVERY:
      state.delivery = action.payload.handler
      return state
    default:
      return state
  }
}
