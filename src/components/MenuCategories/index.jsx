import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { CategoryName, ProductContainer, ProductSection } from './styles'
import { MenuProductCard } from '../MenuProductCard'

export const MenuCategories = ({ category, index }) => {
  const basketState = useSelector((store) => store.basket)

  /**
   * Intersection Observer для lazy load картинок у товаров,
   * относительно категории.
   */
  const [observingFlag, setObservingFlag] = useState(false)
  useEffect(() => {
    const section = document.getElementById(category.id)
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setObservingFlag(entries[0].isIntersecting)
    )
    observingFlag ? observer.unobserve(section) : observer.observe(section)
  }, [category.id, observingFlag])
  const isEven = Boolean(index % 2)
  return (
    <ProductSection isEven={isEven} id={category.id}>
      <ProductContainer>
        <CategoryName>{category.name}</CategoryName>
        {category.products.map((product) => {
          const orderCount = basketState.products.filter((item) => item === product).length

          return (
            <MenuProductCard
              productData={product}
              key={product.id}
              isEven={isEven}
              activeDilevery={basketState.delivery}
              orderCount={orderCount}
              loadFlag={observingFlag}
            />
          )
        })}
      </ProductContainer>
    </ProductSection>
  )
}
