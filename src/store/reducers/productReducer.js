import { generatorProductData } from '../../data'

const data = generatorProductData()
const initialState = data

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
