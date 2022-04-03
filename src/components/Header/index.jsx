import React, { useEffect, useState } from 'react'
import { useValidation } from '../../hooks/useValidation'
import { DeliverySection } from '../DeliverySection'
import { HeaderBasket } from '../HeaderBasket'
import { MenuNav } from '../MenuNav'
import { Wrapper } from './styles'

export const Header = ({ categories }) => {
  const [fixedMenuNav, setFixedMenuNav] = useState(true)
  const [tooltip, setTooltip] = useValidation()

  useEffect(() => {
    const breakPoint = document.getElementById('breakPoint')
    const observer = new IntersectionObserver((entries) => setFixedMenuNav(entries[0].isIntersecting))

    breakPoint && observer.observe(breakPoint)

    return () => {
      breakPoint && observer.unobserve(breakPoint)
    }
  }, [])
  return (
    <Wrapper>
      <HeaderBasket onClick={setTooltip} />
      <DeliverySection tooltipWarning={tooltip} city='Москва' />
      <div id='breakPoint'></div>
      <MenuNav fixedMenuNav={fixedMenuNav} categories={categories} />
    </Wrapper>
  )
}
