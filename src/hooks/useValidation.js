import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../store/actions/basketActions'
import { setDeliveryFormState } from '../store/actions/uiActions'
import { scrollTo } from './utils'

export const useValidation = () => {
  const addressFormState = useSelector((store) => store.ui.addressForm)
  const [timerId, settimerId] = useState(null)
  const [tooltipWarning, setTooltipWarning] = useState([])
  const dispatch = useDispatch()

  const basketData = useSelector((store) => store.basket.products)
  const validation = () => {
    const inputElements = document.querySelectorAll('input')
    if (addressFormState[0] && addressFormState[1]) {
      dispatch(addBasket('http://localhost:4000/basket', basketData))
      dispatch(setDeliveryFormState('', 0))
      dispatch(setDeliveryFormState('', 1))
      inputElements[0].value = ''
      inputElements[1].value = ''
    } else {
      scrollTo(inputElements[0])
      let side = addressFormState[0] ? 'right' : 'left'
      setTooltipWarning(addressFormState[0] ? ['active', side] : ['active', side])
      clearTimeout(timerId)
      settimerId(
        setTimeout(() => {
          setTooltipWarning(['', side])
        }, 3000)
      )
    }
  }
  return [tooltipWarning, validation]
}
