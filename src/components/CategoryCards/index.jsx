import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store'
import { setCategory } from '../../store/actions/uiActions'
import { ProductCard } from '../ProductCard'
import { ProductContainer, ProductSection } from './styles'
import { throttle } from './utils'

export const CategoryCards = React.memo(({ category, productData, categoryStyleProp }) => {
  const [activeDilevery, setActiveDilevery] = useState(true)
  const basketCards = useSelector((store) => store.basket.products)
  const dispatch = useDispatch()

  const containerRef = useRef(null)
  const dileveryHandler = (state) => {
    if (activeDilevery !== state) {
      setActiveDilevery(state)
    }
  }
  store.subscribe(() => dileveryHandler(store.getState().basket.delivery))

  useEffect(() => {
    const scrollTracker = () => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio === 1) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.9) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.8) {
          dispatch(setCategory(entries[0].target.id))
          // console.log(entries[0].target.id, entries[0].intersectionRatio)
          // console.log(document.documentElement.clientWidth)
          // console.log(entries[0])
        } else if (entries[0].intersectionRatio > 0.7) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.6) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.5) {
          dispatch(setCategory(entries[0].target.id))
        }
      })
      containerRef.current && observer.observe(containerRef.current)
    }

    window.addEventListener('scroll', throttle(scrollTracker, 600))
    return () => {
      window.removeEventListener('scroll', throttle(scrollTracker, 600))
    }
  }, [dispatch])

  const styleValue = categoryStyleProp % 2 === 0
  console.log('LIST rendered')

  return (
    <ProductSection categoryStyleProp={styleValue} ref={containerRef} id={category.id}>
      <ProductContainer>
        <h3>{category.name}</h3>
        {productData.map((product) => {
          let orderCount = basketCards.filter((item) => item === product).length

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
})
