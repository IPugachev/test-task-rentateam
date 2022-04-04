import React from 'react'
import { useSelector } from 'react-redux'
import { useCategoryTrack } from '../../hooks/useCategoryTrack'
import { useNavScroll } from '../../hooks/useNavScroll'
import { Categories, Category, CategoryName, HeaderNavWrapper } from './styles'
import { scrollToCategory } from './utils'

export const HeaderNav = ({ fixedHeaderComponents, categories, isVisible }) => {
  const curruntCategory = useSelector((store) => store.ui.category)
  useNavScroll()
  useCategoryTrack()
  return (
    <>
      <HeaderNavWrapper>
        <Categories id='headerNavbar' isFixed={fixedHeaderComponents} isVisible={isVisible}>
          {categories.map((category) => (
            <Category
              key={category.id}
              id={`${category.id}NavButton`}
              isCurrent={curruntCategory === category.id}
              onClick={() => scrollToCategory(category.id)}>
              <CategoryName>{category.name}</CategoryName>
            </Category>
          ))}
        </Categories>
      </HeaderNavWrapper>
    </>
  )
}
