import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearBasket } from '../store/actions/basketActions'
import { postData } from './utils'

export const useValidation = () => {
  const addressFormState = useSelector((store) => store.ui.addressForm)
  const [timerId, settimerId] = useState(null)
  const [tooltipWarning, setTooltipWarning] = useState([])
  const dispatch = useDispatch()

  const basketData = useSelector((store) => store.basket.products)
  const validation = () => {
    if (addressFormState[0] && addressFormState[1]) {
      postData('http://localhost:4000/basket', basketData)
      dispatch(clearBasket())
    } else {
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
