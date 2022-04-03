import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../store'
import { Categories, Category, CategoryName, MenuNavReplacer } from './styles'
import { scrollToCategory } from './utils'

export const MenuNav = ({ fixedMenuNav, categories }) => {
  const categoryFromRedux = useSelector((store) => store.ui.category)

  const [curruntCategory, setCurrentCategory] = useState(categoryFromRedux)

  store.subscribe(() => setCurrentCategory(store.getState().ui.category))

  return (
    <>
      {!fixedMenuNav && <MenuNavReplacer></MenuNavReplacer>}
      <Categories isFixed={fixedMenuNav}>
        {categories.map((category) => (
          <Category
            draggable='true'
            key={category.id}
            isCurrent={curruntCategory === category.id}
            onClick={() => scrollToCategory(category.id)}>
            <CategoryName>{category.name}</CategoryName>
          </Category>
        ))}
      </Categories>
    </>
  )
}
