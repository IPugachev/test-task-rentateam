import React from 'react'
import { useDispatch } from 'react-redux'
import { setDeliveryFormState } from '../../store/actions/uiActions'
import { Input } from '../UI/Input'
import { Tooltip } from '../UI/Tooltip'
import { Form } from './styles'

export const AddressForm = ({ activeDileveryButton, tooltipWarning }) => {
  const dispatch = useDispatch()

  return (
    <Form activeDileveryButton={activeDileveryButton}>
      <Input
        id='addressInput0'
        name='Улица'
        placeholder='ул.Остоженка'
        onChange={(e) => dispatch(setDeliveryFormState(e.target.value, 0))}
      />
      <Input
        id='addressInput1'
        name='Дом'
        placeholder='д.42'
        onChange={(e) => dispatch(setDeliveryFormState(e.target.value, 1))}
      />
      <Tooltip tooltipWarning={tooltipWarning} warningText='Нужно заполнить для оформления доставки' />
    </Form>
  )
}
