import { basketActions } from '../actions/basketActions'

const initialState = {
  totalPrice: 0,
  products: [],
}

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActions.ADD_PRODUCT:
      state.totalPrice += action.payload.product.price
      state.products.push(action.payload.product)
      return state
    case basketActions.REMOVE_PRODUCT:
      let index = state.products.indexOf(action.payload.product)
      if (index !== -1) {
        state.totalPrice -= action.payload.product.price
        state.products.splice(index, 1)
      }
      return state
    default:
      return state
  }
}
