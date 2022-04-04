import React, { useLayoutEffect } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MenuCategories } from '../../components/MenuCategories'
import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../../store/actions/menuActions'

export const MenuPage = () => {
  const dispatch = useDispatch()
  const { menu } = useSelector((store) => store.menu)
  useLayoutEffect(() => {
    dispatch(getMenu())
  }, [dispatch])
  return (
    <>
      <Header categories={menu} />
      {menu.map((category, index) => {
        return <MenuCategories category={category} categoryStyleProp={index} key={category.id} />
      })}
      <Footer />
    </>
  )
}
