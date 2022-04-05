import { uiActions } from '../actions/uiActions'

const initialState = {
  category: null,
  addressForm: ['', ''],
  headerVisible: false,
  currentScrollYPosition: 0,
  previousScrollYPosition: 0,
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

    case uiActions.SET_HEADER_POSITION:
      state.previousScrollYPosition = state.currentScrollYPosition
      state.currentScrollYPosition = action.payload.position
      let temp = state.previousScrollYPosition > state.currentScrollYPosition
      if (state.headerVisible !== temp) {
        state.headerVisible = temp
        return { ...state }
      }
      return state

    default:
      return state
  }
}
