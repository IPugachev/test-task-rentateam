import React from 'react'
import { AddressInput, Label, Title } from './styles'

export const Input = ({ onChange, name, placeholder }) => {
  return (
    <Label>
      <Title>{name}</Title>
      <AddressInput type='text' placeholder={placeholder} onChange={onChange} />
    </Label>
  )
}
