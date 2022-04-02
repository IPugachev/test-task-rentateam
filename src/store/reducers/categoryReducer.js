import { generatorCategoryData } from '../../data'

const data = generatorCategoryData()
const initialState = data

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
