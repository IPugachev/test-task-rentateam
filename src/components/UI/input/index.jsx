import React from 'react'
import { AddressInput, Label, Title } from './styles'

export const Input = ({ onChange, name, placeholder, id }) => {
  return (
    <Label>
      <Title>{name}</Title>
      <AddressInput id={id} type='text' placeholder={placeholder} onChange={onChange} />
    </Label>
  )
}
