import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../store/actions/basketActions'
import { setDeliveryFormState } from '../store/actions/uiActions'
import { scrollTo } from '../utils/app'

export const useValidation = (server) => {
  const [tooltipWarning, setTooltipWarning] = useState([])
  const addressFormState = useSelector((store) => store.ui.addressForm)
  const basketData = useSelector((store) => store.basket.products)
  const timer = useRef()
  const dispatch = useDispatch()
  const validation = () => {
    const firstAddressInputElement = document.getElementById('addressForm')
    if (addressFormState[0] && addressFormState[1]) {
      dispatch(addBasket(`${server}/basket`, basketData))
      dispatch(setDeliveryFormState('', 0))
      dispatch(setDeliveryFormState('', 1))
    } else {
      scrollTo(firstAddressInputElement)
      let side = addressFormState[0] ? 'right' : 'left'
      setTooltipWarning(addressFormState[0] ? ['active', side] : ['active', side])
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        setTooltipWarning(['', side])
      }, 3000)
    }
  }
  return [tooltipWarning, validation]
}
