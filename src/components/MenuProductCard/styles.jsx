import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 288px;
  height: 360px;
  padding: 16px 40px;
  color: rgba(157, 157, 157, 1);
  cursor: pointer;
  ${({ availiable }) => availiable && 'display: none'};
  &:hover {
    background-color: ${({ categoryStyleProp }) => (categoryStyleProp ? 'rgb(247, 246, 245)' : 'rgb(255, 255, 255)')};
    color: #000;
  }
  &:hover div img {
    transform: scale(1.2);
  }
  @media (min-width: 1920px) {
    width: 420px;
    height: 500px;
  }
  @media (max-width: 740px) {
    width: 225px;
    height: 260px;
    padding: 4px 10px;
  }
  @media (max-width: 500px) {
    width: 155px;
    height: 155px;
    padding: 4px 10px;
  }
`
export const CardImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 216px;
  height: 150px;
  margin: 19px 0;
  @media (min-width: 1920px) {
    width: 390px;
    height: 230px;
  }
  @media (max-width: 500px) {
    width: 108px;
    height: 75px;
    margin: 9px 0;
  }
`
export const CardFlag = styled.div`
  position: absolute;
  ${({ flag }) => (flag === 'default' ? 'display:none' : 'display:flex')};
  background: ${({ flag }) => (flag === 'new' ? 'rgba(228, 0, 43)' : '#000')};
  width: 55px;
  height: 55px;
  border-radius: 50%;
  top: 0;
  left: 0;
  justify-content: center;
  z-index: 1;
  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`
export const CardFlagText = styled.span`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 0, 9375rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: 0px;
`
export const CardImage = styled.img`
  transition: all 0.2s ease-in-out;
  object-fit: contain;
  width: 100%;
  ${({ loadFlag }) =>
    !loadFlag &&
    css`
      animation: ${rotate} 5s linear infinite;
    `}
`

export const CardButtonsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  color: ${({ isDisable }) => (isDisable ? '#000' : '#fff')};
  border-radius: 20px;
  ${({ isDisable }) => !isDisable && 'background: #000'};
  & > :not(:last-child) {
    ${({ isDisable }) => isDisable && 'display: none;'};
  }
  & > :last-child {
    ${({ isDisable }) => isDisable && 'box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);'};
  }
  & > :active {
    ${({ isDisable }) =>
      isDisable &&
      css`
        transform: scale(0.99);
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: none;
      `}
  }

  @media (min-width: 1920px) {
    bottom: 30px;
    right: 30px;
    border-radius: 40px;
  }
  @media (max-width: 500px) {
    bottom: 5px;
    right: 5px;
  }
`

export const Price = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0px;
`

export const CardName = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0px;
  text-align: center;
`
export const CardDefaultPrice = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 2rem;
  color: rgba(228, 0, 43, 1);
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0px;
  text-align: center;
`
