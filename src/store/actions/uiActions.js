export const uiActions = {
  SET_CATEGORY: 'SET_CATEGORY',
  SET_DELIVERY_FORM_STATE: 'SET_DELIVERY_FORM_STATE',
  SET_BASKET_HEADER_POSITION: 'SET_BASKET_HEADER_POSITION',
}

export const setCategory = (category) => ({
  type: uiActions.SET_CATEGORY,
  payload: { category },
})

export const setDeliveryFormState = (value, id) => ({
  type: uiActions.SET_DELIVERY_FORM_STATE,
  payload: { value, id },
})

export const setHeaderBasketPosition = (position) => ({
  type: uiActions.SET_BASKET_HEADER_POSITION,
  payload: { position },
})
