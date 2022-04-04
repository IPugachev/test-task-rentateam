import { uiActions } from '../actions/uiActions'

const initialState = {
  category: null,
  addressForm: ['', ''],
  basketPosition: false,
  currentPosition: 0,
  previousPosition: 0,
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActions.SET_CATEGORY:
      if (state.category !== action.payload.category && action.payload.category !== 'root') {
        state.category = action.payload.category
        return { ...state }
      }
      return state
    case uiActions.SET_DELIVERY_FORM_STATE:
      if (action.payload.id) {
        state.addressForm[1] = action.payload.value
      } else {
        state.addressForm[0] = action.payload.value
      }
      return { ...state }
    case uiActions.SET_BASKET_HEADER_POSITION:
      state.previousPosition = state.currentPosition
      state.currentPosition = action.payload.position
      let bool = state.previousPosition > state.currentPosition
      if (state.basketPosition !== bool) {
        state.basketPosition = bool
        return { ...state }
      }
      return state
    default:
      return state
  }
}
