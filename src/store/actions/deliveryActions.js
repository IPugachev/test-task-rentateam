export const deliveryActions = {
  TOGGLE_DELIVERY: 'TOGGLE_DELIVERY',
}

export const setDeliveryState = (handler) => ({
  type: deliveryActions.TOGGLE_DELIVERY,
  payload: { handler },
})
