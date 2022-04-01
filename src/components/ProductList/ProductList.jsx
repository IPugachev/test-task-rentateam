import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store'
import { addProduct, removeProduct } from '../../store/actions/basketActions'
import {
  AddButton,
  CardButtonsBox,
  CardButtonWrapper,
  CardImage,
  CardImageBox,
  CardName,
  CardPrice,
  DeleteButton,
  Price,
  ProductCard,
  ProductContainer,
  ProductSection,
} from './styles'

export const ProductList = ({ category, productData, categoryStyleProp }) => {
  const [activeDilevery, setActiveDilevery] = useState(true)
  const total = useSelector((store) => store.basket)
  const dispatch = useDispatch()
  const addProductToBasket = (product) => {
    dispatch(addProduct(product))
    console.log(total.totalPrice)
    console.table(total.products)
  }
  const deleteProductFromBasket = (product) => {
    dispatch(removeProduct(product))
    console.log(total.totalPrice)
    console.table(total.products)
  }

  store.subscribe(() => setActiveDilevery(store.getState().delivery))
  const styleValue = categoryStyleProp % 2 === 0

  const containerRef = useRef(null)

  // const categories = document.getElementById(`${category.id}`)
  // const observer = new IntersectionObserver((entries) => console.log(entries))
  // observer.observe(categories)

  return (
    <ProductSection categoryStyleProp={styleValue} id={category.id} ref={containerRef}>
      <ProductContainer>
        <h3>{category.name}</h3>
        {productData.map((product) => {
          let orderCount = total.products.filter((item) => item === product).length

          return (
            <ProductCard
              key={product.id}
              availiable={product.delivery && activeDilevery}
              categoryStyleProp={styleValue}>
              <CardImageBox>
                <CardImage src={require(`../../assets/img/${product.img}`)} alt='' />
                <CardButtonsBox isDisable={orderCount ? false : true}>
                  <CardButtonWrapper onClick={() => deleteProductFromBasket(product)}>
                    <DeleteButton />
                  </CardButtonWrapper>
                  <Price>{orderCount}</Price>
                  <CardButtonWrapper isDisable={orderCount ? false : true} onClick={() => addProductToBasket(product)}>
                    <AddButton />
                  </CardButtonWrapper>
                </CardButtonsBox>
              </CardImageBox>
              <CardName>{product.name}</CardName>
              <CardPrice>{product.price} ₽</CardPrice>
            </ProductCard>
          )
        })}
      </ProductContainer>
    </ProductSection>
  )
}
