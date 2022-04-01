export const basketActions = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
}

export const addProduct = (product) => ({
  type: basketActions.ADD_PRODUCT,
  payload: { product },
})
export const removeProduct = (product) => ({
  type: basketActions.REMOVE_PRODUCT,
  payload: { product },
})
