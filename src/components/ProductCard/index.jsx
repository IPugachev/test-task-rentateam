import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../../store/actions/basketActions'
import { CardButton } from '../UI/button/CardButton'
import {
  Card,
  CardButtonsContainer,
  CardDefaultPrice,
  CardFlag,
  CardFlagText,
  CardImage,
  CardImageBox,
  CardName,
  Price,
} from './styles'

export const ProductCard = ({ productData, styleValue, activeDilevery, orderCount }) => {
  const dispatch = useDispatch()
  const addProductToBasket = (product) => {
    dispatch(addProduct(product))
  }
  const deleteProductFromBasket = (product) => {
    dispatch(removeProduct(product))
  }

  const flagText = productData.flag === 'new' ? 'Новое' : productData.flag === 'hit' ? 'Хит' : ''
  return (
    <Card availiable={productData.delivery && activeDilevery} categoryStyleProp={styleValue}>
      <CardImageBox>
        <CardFlag flag={productData.flag}>
          <CardFlagText>{flagText}</CardFlagText>
        </CardFlag>
        <CardImage src={productData.img} alt='' />
        <CardButtonsContainer isDisable={orderCount ? false : true}>
          <CardButton onClick={() => deleteProductFromBasket(productData)} type={false} />
          <Price>{orderCount}</Price>
          <CardButton
            isDisable={orderCount ? false : true}
            onClick={() => addProductToBasket(productData)}
            type={true}
          />
        </CardButtonsContainer>
      </CardImageBox>
      <CardName>{productData.name}</CardName>
      <CardDefaultPrice>{productData.price} ₽</CardDefaultPrice>
    </Card>
  )
}
