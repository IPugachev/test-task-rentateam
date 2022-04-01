import { deliveryActions } from '../actions/deliveryActions'

const initialState = true

export const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case deliveryActions.TOGGLE_DELIVERY:
      state = action.payload.handler
      return state

    default:
      return state
  }
}
