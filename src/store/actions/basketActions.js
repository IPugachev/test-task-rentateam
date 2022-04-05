export const basketActions = {
  ADD_PRODUCT_TO_BASKET: 'ADD_PRODUCT_TO_BASKET',
  REMOVE_PRODUCT_FROM_BASKET: 'REMOVE_PRODUCT_FROM_BASKET',
  CLEAR_BASKET: 'CLEAR_BASKET',
  TOGGLE_DELIVERY: 'TOGGLE_DELIVERY',
}

export const addBasket = (url, data) => {
  return async (dispatch) => {
    try {
      console.log('SEND:', data)
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      })
    } catch (err) {
      console.log('Error:', err)
    }
    console.log('success')
    dispatch(clearBasket())
  }
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
