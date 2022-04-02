import React, { useState } from 'react'
import { store } from '../../store'
import { Basket, BasketButton, BasketHeader, BasketPrice, HeaderIcon, MenuBurger, Wrapper } from './styles'

export const HeaderBasket = ({ onClick }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  store.subscribe(() => setTotalPrice(store.getState().basket.totalPrice))
  return (
    <Wrapper>
      <BasketHeader>
        <HeaderIcon />
        <MenuBurger />
        <BasketButton isBasketActive={totalPrice ? false : true} onClick={onClick}>
          <BasketPrice>{totalPrice} ₽</BasketPrice>
          <Basket />
        </BasketButton>
      </BasketHeader>
    </Wrapper>
  )
}
