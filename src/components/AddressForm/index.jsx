import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryFormState } from '../../store/actions/uiActions'
import { Input } from '../UI/Input'
import { Tooltip } from '../UI/Tooltip'
import { Form } from './styles'

export const AddressForm = ({ activeDileveryButton, tooltipWarning }) => {
  const { addressForm } = useSelector((store) => store.ui)
  const dispatch = useDispatch()

  return (
    <Form activeDileveryButton={activeDileveryButton} id='addressForm'>
      <Input
        name='Улица'
        value={addressForm[0]}
        placeholder='ул.Остоженка'
        onChange={(e) => dispatch(setDeliveryFormState(e.target.value, 0))}
      />
      <Input
        name='Дом'
        placeholder='д.42'
        value={addressForm[1]}
        onChange={(e) => dispatch(setDeliveryFormState(e.target.value, 1))}
      />
      <Tooltip tooltipWarning={tooltipWarning} warningText='Нужно заполнить для оформления доставки' />
    </Form>
  )
}
