import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/icons/header-icon.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/menu-burger.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 87%;
`
export const HeaderContainer = styled(Wrapper)`
  width: 100%;
`
export const MenuSection = styled.section`
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
export const Burger = styled(BurgerIcon)`
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
  & span {
    font-family: 'Cera Condensed Pro';
    color: #ffffff;
    font-size: 20px;
    line-height: 25px;
  }
`
export const Basket = styled(BasketIcon)`
  height: 20px;
`
export const DeliverySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 100px 0 0;
`
export const DeliveryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & h1 {
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 64px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0px;
  }
`

export const DeliveryButtonGroup = styled.div`
  display: flex;
`

export const DeliveryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 146px;
  padding: 12px 0;
  border-radius: 4px;
  font-family: 'Abel', sans-serif;
  size: 16px;
  line-height: 24px;
  background: ${({ active }) => (active ? 'rgba(228, 0, 43)' : 'rgba(239, 239, 239)')};
  color: ${({ active }) => (active ? 'rgba(255, 255, 255)' : 'rgba(157, 157, 157)')};
  cursor: pointer;
`
export const DeliveryAddress = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 47px 0 63px;
  gap: 43px;
  & label {
    display: flex;
    gap: 12px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    line-height: 40px;
  }
  & label input {
    width: 210px;
    background: #f7f6f5;
    padding: 10px 16px;
    border: 0px;
    border-radius: 4px;
    font-family: Abel;
    font-size: 16px;
    line-height: 22px;
  }
`
export const ProductSection = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 96px;
`
export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  font-weight: 400;
  height: 100%;
  color: rgba(157, 157, 157);
  &:first-child {
    color: rgba(228, 0, 43);
    border-bottom: 1px solid rgba(228, 0, 43, 1);
  }
`
