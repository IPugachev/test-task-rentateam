import React from 'react'
import { AddIcon, Button, DeleteIcon } from './styles'

export const CardButton = ({ onClick, type, isDisable }) => {
  return (
    <Button isDisable={isDisable} onClick={onClick}>
      {type ? <AddIcon /> : <DeleteIcon />}
    </Button>
  )
}
