export const uiActions = {
  SET_CATEGORY: 'SET_CATEGORY',
  SET_DELIVERY_FORM_STATE: 'SET_DELIVERY_FORM_STATE',
  SET_HEADER_POSITION: 'SET_HEADER_POSITION',
}

export const setCategory = (category) => ({
  type: uiActions.SET_CATEGORY,
  payload: { category },
})

export const setDeliveryFormState = (value, id) => ({
  type: uiActions.SET_DELIVERY_FORM_STATE,
  payload: { value, id },
})

export const setHeaderPosition = (position) => ({
  type: uiActions.SET_HEADER_POSITION,
  payload: { position },
})
