import React from 'react'
import { useDispatch } from 'react-redux'
import { setDeliveryFormState } from '../../store/actions/uiActions'
import { Input } from '../UI/input'
import { Tooltip } from '../UI/tooltip'
import { Form } from './styles'

export const HeaderAddressForm = ({ activeDileveryButton, tooltipWarning }) => {
  const dispatch = useDispatch()

  return (
    <Form activeDileveryButton={activeDileveryButton}>
      <Input
        name='Улица'
        placeholder='ул. Остоженка'
        onChange={(e) => dispatch(setDeliveryFormState(e.target.value, 0))}
      />
      <Input name='Дом' placeholder='д. 42' onChange={(e) => dispatch(setDeliveryFormState(e.target.value, 1))} />
      <Tooltip tooltipWarning={tooltipWarning} warningText='Нужно заполнить для оформления доставки' />
    </Form>
  )
}
