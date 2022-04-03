import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useCategoryTrack } from '../../hooks/useCategoryTrack'
import { store } from '../../store'
import { ProductCard } from '../ProductCard'
import { CategoryName, ProductContainer, ProductSection } from './styles'

export const CategoryCards = ({ category, categoryStyleProp }) => {
  const [activeDilevery, setActiveDilevery] = useState(true)
  const [amountOfProductsInBasket, setAmountOfProductsInBasket] = useState(0)
  const [bastketProcutsState, setBastketProcutsState] = useState([])

  const containerRef = useRef(null)

  useEffect(() => {
    const dileveryHandler = (state) => {
      if (activeDilevery !== state) {
        setActiveDilevery(state)
      }
    }
    const updateCategories = (products) => {
      setBastketProcutsState(products)
      setAmountOfProductsInBasket(products.length)
    }
    store.subscribe(() => dileveryHandler(store.getState().basket.delivery))
    store.subscribe(() => updateCategories(store.getState().basket.products))
  }, [activeDilevery])
  useCategoryTrack(category)

  const styleValue = categoryStyleProp % 2 === 0

  // console.log(cards)
  return (
    <ProductSection categoryStyleProp={styleValue} ref={containerRef} id={category.id}>
      <ProductContainer>
        <CategoryName>{category.name}</CategoryName>
        {category.products.map((product) => {
          let orderCount = bastketProcutsState.filter((item) => item === product).length

          return (
            <ProductCard
              productData={product}
              key={product.id}
              styleValue={styleValue}
              activeDilevery={activeDilevery}
              orderCount={orderCount}
            />
          )
        })}
      </ProductContainer>
    </ProductSection>
  )
}
