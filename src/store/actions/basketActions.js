export const basketActions = {
  ADD_PRODUCT_TO_BASKET: 'ADD_PRODUCT_TO_BASKET',
  REMOVE_PRODUCT_FROM_BASKET: 'REMOVE_PRODUCT_FROM_BASKET',
  CLEAR_BASKET: 'CLEAR_BASKET',
  TOGGLE_DELIVERY: 'TOGGLE_DELIVERY',
}

export const addProduct = (product) => ({
  type: basketActions.ADD_PRODUCT_TO_BASKET,
  payload: { product },
})
export const removeProduct = (product) => ({
  type: basketActions.REMOVE_PRODUCT_FROM_BASKET,
  payload: { product },
})
export const clearBasket = () => ({
  type: basketActions.CLEAR_BASKET,
})
export const setDeliveryState = (handler) => ({
  type: basketActions.TOGGLE_DELIVERY,
  payload: { handler },
})
