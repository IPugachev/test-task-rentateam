import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { store } from '../store'
import { clearBasket } from '../store/actions/basketActions'

export const useValidation = () => {
  const [addressForm, setAddressForm] = useState(['', ''])
  const [timerId, settimerId] = useState(null)
  const [tooltipWarning, setTooltipWarning] = useState([])
  const dispatch = useDispatch()
  store.subscribe(() => setAddressForm(store.getState().ui.addressForm))

  const validation = () => {
    if (addressForm[0] && addressForm[1]) {
      dispatch(clearBasket())
    } else {
      let side = addressForm[0] ? 'right' : 'left'
      setTooltipWarning(addressForm[0] ? ['active', side] : ['active', side])

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
