import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Basket, BasketButton, Container, BasketPrice, HeaderIcon, MenuBurger, Wrapper } from './styles'
import { useShowBasket } from './useShowBasket'

export const Header = ({ onClick }) => {
  const [isOut, setIsOut] = useState(true)
  const price = useSelector((store) => store.basket.totalPrice)
  const isVisible = useSelector((store) => store.ui.headerVisible)
  const breakPoint = document.getElementById('header')
  const observer = new IntersectionObserver((entries) => setIsOut(entries[0].isIntersecting))
  breakPoint && observer.observe(breakPoint)
  useShowBasket()
  return (
    <Wrapper id='header'>
      <Container isVisible={isVisible} isOut={!isOut}>
        <HeaderIcon />
        <MenuBurger />
        <BasketButton isBasketActive={price ? false : true} onClick={onClick}>
          <BasketPrice>{price} ₽</BasketPrice>
          <Basket />
        </BasketButton>
      </Container>
    </Wrapper>
  )
}
