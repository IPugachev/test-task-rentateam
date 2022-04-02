import { ReactComponent as Icon } from '../../assets/icons/header-icon.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/menu-burger.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 100%;
  height: 200px;
`
export const BasketHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: #ffffff;
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
`
export const BasketPrice = styled.span`
  font-family: 'Cera Condensed Pro';
  color: #ffffff;
  font-size: 20px;
  line-height: 25px;
`

export const Basket = styled(BasketIcon)`
  height: 20px;
`
