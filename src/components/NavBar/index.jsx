import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { NavBarContainer, Category, CategoryName, NavBarWrapper } from './styles'
import { useCategoryTrack } from './useCategoryTrack'
import { useNavScroll } from './useNavScroll'
import { scrollToCategory } from './utils'

export const NavBar = ({ menu }) => {
  const isVisible = useSelector((store) => store.ui.headerVisible)
  const curruntCategory = useSelector((store) => store.ui.category)

  const [isNavBarFixed, setIsNavBarFixed] = useState(true)
  const breakPoint = document.getElementById('delivery-section')
  const observer = new IntersectionObserver((entries) => setIsNavBarFixed(entries[0].isIntersecting))
  breakPoint && observer.observe(breakPoint)

  useNavScroll()
  useCategoryTrack()
  return (
    <NavBarWrapper isFixed={isNavBarFixed}>
      <NavBarContainer id='navbar' isFixed={isNavBarFixed} isVisible={isVisible}>
        {menu.map((category) => (
          <Category
            key={category.id}
            id={`${category.id}NavButton`}
            isCurrent={curruntCategory === category.id}
            onClick={() => scrollToCategory(category.id)}>
            <CategoryName>{category.name}</CategoryName>
          </Category>
        ))}
      </NavBarContainer>
    </NavBarWrapper>
  )
}
