import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Basket, BasketButton, BasketHeader, BasketPrice, HeaderIcon, MenuBurger, Wrapper } from './styles'

export const HeaderBasket = ({ onClick, isVisible }) => {
  const [isOut, setIsOut] = useState(true)
  const price = useSelector((store) => store.basket.totalPrice)

  const breakPoint = document.getElementById('header-basket-section')
  const observer = new IntersectionObserver((entries) => setIsOut(entries[0].isIntersecting))
  breakPoint && observer.observe(breakPoint)

  return (
    <Wrapper id='header-basket-section'>
      <BasketHeader isVisible={isVisible} isOut={!isOut}>
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
