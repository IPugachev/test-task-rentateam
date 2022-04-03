import React, { useState } from 'react'
import { store } from '../../store'
import { Categories, Category, MenuNavReplacer } from './styles'
import { scrollToCategory } from './utils'

export const MenuNav = ({ fixedMenuNav, categories }) => {
  const [curruntCategory, setCurrentCategory] = useState('null')

  store.subscribe(() => setCurrentCategory(store.getState().ui.category))

  return (
    <>
      {!fixedMenuNav && <MenuNavReplacer></MenuNavReplacer>}
      <Categories isFixed={fixedMenuNav}>
        {categories.map((category) => (
          <Category
            key={category.id}
            isCurrent={curruntCategory === category.id}
            onClick={() => scrollToCategory(category.id)}>
            {category.name}
          </Category>
        ))}
      </Categories>
    </>
  )
}
