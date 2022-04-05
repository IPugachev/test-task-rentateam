import React from 'react'
import { useDispatch } from 'react-redux'

import { addProduct, removeProduct } from '../../store/actions/basketActions'
import { CardButton } from '../UI/buttons/CardButton'
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
import Loading from '../../assets/img/loading.png'

export const MenuProductCard = ({ productData, isEven, activeDilevery, orderCount, loadFlag }) => {
  const dispatch = useDispatch()
  const addProductToBasket = (product) => {
    dispatch(addProduct(product))
  }
  const deleteProductFromBasket = (product) => {
    dispatch(removeProduct(product))
  }

  const flagText = productData.flag === 'new' ? 'Новое' : productData.flag === 'hit' ? 'Хит' : ''
  return (
    <Card availiable={productData.delivery && activeDilevery} isEven={isEven}>
      <CardImageBox>
        <CardFlag flag={productData.flag}>
          <CardFlagText>{flagText}</CardFlagText>
        </CardFlag>
        <CardImage src={loadFlag ? productData.img : Loading} loadFlag={loadFlag} alt={productData.name} />
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
