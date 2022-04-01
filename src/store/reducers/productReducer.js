import { generatorProductData } from '../../data'

const data = generatorProductData()
const initialState = data

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // case PlanktonActionTypes.ADD_PLANKTON:
    //   state.planktons.push(action.payload)
    //   return state
    // case PlanktonActionTypes.REMOVE_PLANKTON:
    //   state.planktons.filter((item) => item.id !== action.payload.id)
    //   return state
    default:
      return state
  }
}
