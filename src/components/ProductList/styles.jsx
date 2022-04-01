import styled from 'styled-components'
import { css } from 'styled-components'
import { ReactComponent as AddIcon } from '../../assets/icons/add-icon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg'

export const ProductSection = styled.section`
  width: 100%;
  padding: 40px 0;
  /* background-color: black; */
  background-color: ${({ categoryStyleProp }) => (categoryStyleProp ? 'rgb(247, 246, 245)' : 'rgb(255, 255, 255)')};
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 288px);
  gap: 30px;
  margin: 0 auto;
  width: 87%;
  justify-content: center;

  & h3 {
    grid-column: 1 / -1;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
  }
`
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 288px;
  height: 360px;
  padding: 16px 40px;
  cursor: pointer;
  ${({ availiable }) => availiable && 'display: none'};
  &:hover {
    background-color: ${({ categoryStyleProp }) => (!categoryStyleProp ? 'rgb(247, 246, 245)' : 'rgb(255, 255, 255)')};
  }
  &:hover div img {
    transform: scale(1.2);
  }
`
export const CardImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 216px;
  height: 150px;
  margin: 19px 0;
`
export const CardButtonsBox = styled.div`
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
`
export const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${({ isDisable }) => (isDisable ? '#fff' : '#000')};
  &:active {
    transition: background-color 0.15s ease-out;
    ${({ isDisable }) => !isDisable && 'background: rgba(255, 255, 255, 0.15);'};
  }
  border-radius: 50%;
`

export const Price = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`

export const AddButton = styled(AddIcon)``

export const DeleteButton = styled(DeleteIcon)``

export const CardImage = styled.img`
  transition: all 0.2s ease-in-out;
  object-fit: contain;
`
export const CardName = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
`
export const CardPrice = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 32px;
  color: rgba(228, 0, 43, 1);
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
`
