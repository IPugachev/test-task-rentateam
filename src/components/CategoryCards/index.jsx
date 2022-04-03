import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useCategoryTrack } from '../../hooks/useCategoryTrack'
import { ProductCard } from '../ProductCard'
import { CategoryName, ProductContainer, ProductSection } from './styles'

export const CategoryCards = ({ category, categoryStyleProp }) => {
  const basketState = useSelector((store) => store.basket)

  const containerRef = useRef(null)

  useCategoryTrack(category)

  const styleValue = categoryStyleProp % 2 === 0

  return (
    <ProductSection categoryStyleProp={styleValue} ref={containerRef} id={category.id}>
      <ProductContainer>
        <CategoryName>{category.name}</CategoryName>
        {category.products.map((product) => {
          const orderCount = basketState.products.filter((item) => item === product).length

          return (
            <ProductCard
              productData={product}
              key={product.id}
              styleValue={styleValue}
              activeDilevery={basketState.delivery}
              orderCount={orderCount}
            />
          )
        })}
      </ProductContainer>
    </ProductSection>
  )
}
