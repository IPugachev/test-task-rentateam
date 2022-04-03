import React from 'react'
import { useSelector } from 'react-redux'

import { Basket, BasketButton, BasketHeader, BasketPrice, HeaderIcon, MenuBurger, Wrapper } from './styles'

export const HeaderBasket = ({ onClick }) => {
  const price = useSelector((store) => store.basket.totalPrice)

  return (
    <Wrapper>
      <BasketHeader>
        <HeaderIcon />
        <MenuBurger />
        <BasketButton isBasketActive={price ? false : true} onClick={onClick}>
          <BasketPrice>{price} ₽</BasketPrice>
          <Basket />
        </BasketButton>
      </BasketHeader>
    </Wrapper>
  )
}
