import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { MenuProductCard } from '../MenuProductCard'
import { CategoryName, ProductContainer, ProductSection } from './styles'

export const MenuCategories = ({ category, categoryStyleProp }) => {
  const basketState = useSelector((store) => store.basket)
  const [observingFlag, setObservingFlag] = useState(false)
  const containerRef = useRef(null)
  console.log('rendered')
  useEffect(() => {
    const section = document.getElementById(category.id)
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setObservingFlag(entries[0].isIntersecting)
    )
    observingFlag ? observer.unobserve(section) : observer.observe(section)
  }, [category.id, observingFlag])

  return (
    <ProductSection categoryStyleProp={categoryStyleProp % 2} ref={containerRef} id={category.id}>
      <ProductContainer>
        <CategoryName>{category.name}</CategoryName>
        {category.products.map((product) => {
          const orderCount = basketState.products.filter((item) => item === product).length

          return (
            <MenuProductCard
              productData={product}
              key={product.id}
              styleValue={categoryStyleProp % 2}
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
