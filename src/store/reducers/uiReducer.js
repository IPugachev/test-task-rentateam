import { uiActions } from '../actions/uiActions'

const initialState = {
  category: null,
  addressForm: ['', ''],
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActions.SET_CATEGORY:
      if (state.category !== action.payload.category) {
        state.category = action.payload.category
      }
      return state
    case uiActions.SET_DELIVERY_FORM_STATE:
      if (action.payload.id) {
        state.addressForm[1] = action.payload.value
      } else {
        state.addressForm[0] = action.payload.value
      }
      return state
    default:
      return state
  }
}
