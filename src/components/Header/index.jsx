import React, { useEffect, useRef, useState } from 'react'
import { useValidation } from '../../hooks/useValidation'
import { DeliverySection } from '../DeliverySection'
import { HeaderBasket } from '../HeaderBasket'
import { MenuNav } from '../MenuNav'
import { Wrapper } from './styles'

export const Header = ({ categories }) => {
  const [fixedMenuNav, setFixedMenuNav] = useState(true)
  const [tooltip, setTooltip] = useValidation()

  const headerRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => setFixedMenuNav(entries[0].isIntersecting))

    headerRef.current && observer.observe(headerRef.current)

    return () => {
      headerRef.current && observer.unobserve(headerRef.current)
    }
  }, [headerRef])
  return (
    <Wrapper>
      <HeaderBasket onClick={setTooltip} />
      <DeliverySection tooltipWarning={tooltip} city='Москва' />
      <div ref={headerRef}></div>
      <MenuNav fixedMenuNav={fixedMenuNav} categories={categories} />
    </Wrapper>
  )
}
