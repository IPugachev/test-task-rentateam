import { generatorCategoryData } from '../../data'

const data = generatorCategoryData()
const initialState = data

export const categoryReducer = (state = initialState, action) => {
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
