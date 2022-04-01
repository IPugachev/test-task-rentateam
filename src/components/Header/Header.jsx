import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryState } from '../../store/actions/deliveryActions'
import {
  Basket,
  BasketButton,
  Burger,
  DeliveryAddress,
  DeliveryButton,
  DeliveryButtonGroup,
  DeliverySection,
  DeliveryTitle,
  HeaderContainer,
  HeaderIcon,
  MenuSection,
  ProductItem,
  ProductSection,
  Wrapper,
} from './styles'

export const Header = ({ totalPrice }) => {
  const [activeDileveryButton, setActiveDileveryButton] = useState(true)

  const observer = new IntersectionObserver((entries) => console.log(entries))

  const dispanch = useDispatch()
  useEffect(() => {
    dispanch(setDeliveryState(activeDileveryButton))
  }, [dispanch, activeDileveryButton])
  const dileveryHandler = (type) => {
    type !== activeDileveryButton && setActiveDileveryButton((prev) => !prev)
  }
  const headerCategory = useSelector((store) => store.category)

  return (
    <Wrapper>
      <HeaderContainer>
        <MenuSection>
          <HeaderIcon />
          <Burger />
          <BasketButton isBasketActive={totalPrice ? false : true}>
            <span>{totalPrice} ₽</span>
            <Basket />
          </BasketButton>
        </MenuSection>
        <DeliverySection>
          <DeliveryTitle>
            <h1>Доставка г.Москва</h1>
            <DeliveryButtonGroup>
              <DeliveryButton active={activeDileveryButton} onClick={() => dileveryHandler(true)}>
                Доставка
              </DeliveryButton>
              <DeliveryButton active={!activeDileveryButton} onClick={() => dileveryHandler(false)}>
                Самовывоз
              </DeliveryButton>
            </DeliveryButtonGroup>
          </DeliveryTitle>
          {activeDileveryButton && (
            <DeliveryAddress>
              <label>
                Улица <input type='text' placeholder='Остоженка'></input>
              </label>

              <label>
                Дом <input type='text' placeholder='Остоженка'></input>
              </label>
            </DeliveryAddress>
          )}
        </DeliverySection>
      </HeaderContainer>
      <ProductSection>
        {headerCategory.map((category) => (
          <ProductItem key={category.id}>{category.name}</ProductItem>
        ))}
      </ProductSection>
    </Wrapper>
  )
}
