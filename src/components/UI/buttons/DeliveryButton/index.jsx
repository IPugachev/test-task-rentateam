import React from 'react'

import { Button, ButtonText } from './styles'

export const DeliveryButton = ({ activeDileveryButton, onClick, text }) => {
  return (
    <Button active={activeDileveryButton} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}
