import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useShowBasket } from '../../hooks/useShowBasket'
import { useValidation } from '../../hooks/useValidation'
import { HeaderDeliverySection } from '../HeaderDeliverySection'
import { HeaderBasket } from '../HeaderBasket'
import { HeaderNav } from '../HeaderNav'
import { Wrapper } from './styles'

export const Header = ({ categories }) => {
  const [fixedHeaderComponents, setFixedHeaderComponents] = useState(true)
  const [tooltip, setTooltip] = useValidation()
  const isVisible = useSelector((store) => store.ui.basketPosition)
  useShowBasket()
  const breakPoint = document.getElementById('delivery-section')
  const observer = new IntersectionObserver((entries) => setFixedHeaderComponents(entries[0].isIntersecting))
  breakPoint && observer.observe(breakPoint)

  return (
    <Wrapper>
      <HeaderBasket isVisible={isVisible} onClick={setTooltip} />
      <HeaderDeliverySection tooltipWarning={tooltip} city='Москва' />
      <HeaderNav isVisible={isVisible} fixedHeaderComponents={fixedHeaderComponents} categories={categories} />
    </Wrapper>
  )
}
