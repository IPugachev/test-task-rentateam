import { ReactComponent as Icon } from '../../assets/icons/header-icon.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/menu-burger.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg'
import styled from 'styled-components'
import { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  height: 200px;
  width: 87%;
  @media (max-width: 740px) {
    width: 95%;
  }
`
export const Container = styled.div`
  display: flex;
  position: fixed;
  overflow: visible;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: #ffffff;
  transition: transform 0.3s ease;
  z-index: 9;
  height: 64px;
  padding: 10px 6.5%;
  ${({ isOut }) => isOut && 'transform:translateY(-100%);'}

  ${({ isVisible }) =>
    isVisible &&
    css`
      z-index: 11;
      transform: translateY(0);
    `}
`
export const HeaderIcon = styled(Icon)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`
export const MenuBurger = styled(BurgerIcon)`
  cursor: pointer;
`
export const BasketButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isBasketActive }) => isBasketActive && 'visibility: hidden'};
  padding: 6px 10px;
  background-color: rgba(228, 0, 43, 1);
  border-radius: 18px;
  gap: 5px;
  cursor: pointer;
  @media (min-width: 1920px) {
    border-radius: 36px;
    padding: 12px 20px;
  }
`
export const BasketPrice = styled.span`
  font-family: 'Cera Condensed Pro';
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.5rem;
`

export const Basket = styled(BasketIcon)`
  height: 20px;
`
