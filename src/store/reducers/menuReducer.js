import { menuActions } from '../actions/menuActions'

const initialState = {
  loading: false,
  menu: [],
  error: null,
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case menuActions.GET_MENU_STARTED:
      return {
        ...state,
        loading: true,
      }
    case menuActions.GET_MENU_SUCCESS:
      console.log('Data from server:', action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        menu: action.payload,
      }
    case menuActions.GET_MENU_FAILURE:
      console.log('Error:', action.payload.error)
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
