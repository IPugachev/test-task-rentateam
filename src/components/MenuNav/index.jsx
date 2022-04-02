import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../store'
import { Categories, Category, MenuNavReplacer } from './styles'
import { scrollToCategory } from './utils'

export const MenuNav = ({ fixedMenuNav }) => {
  const [curruntCategory, setCurrentCategory] = useState('null')

  const headerCategory = useSelector((store) => store.category)
  store.subscribe(() => setCurrentCategory(store.getState().ui.category))

  return (
    <>
      {!fixedMenuNav && <MenuNavReplacer></MenuNavReplacer>}
      <Categories isFixed={fixedMenuNav}>
        {headerCategory.map((category) => (
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
