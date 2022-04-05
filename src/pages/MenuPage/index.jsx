import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { DeliverySection } from '../../components/DeliverySection'
import { MenuCategories } from '../../components/MenuCategories'
import { getMenu } from '../../store/actions/menuActions'
import { useValidation } from '../../hooks/useValidation'

export const MenuPage = () => {
  console.log('PAGE', process.env)
  // NODE_ENV==='development'?'lo'
  const dispatch = useDispatch()
  const { menu } = useSelector((store) => store.menu)

  useLayoutEffect(() => {
    dispatch(getMenu())
  }, [dispatch])

  const [tooltip, setTooltip] = useValidation()

  return (
    <>
      <Header onClick={setTooltip} />
      <DeliverySection tooltipWarning={tooltip} city='Москва' />
      <NavBar menu={menu} />
      {menu.map((category, index) => (
        <MenuCategories category={category} index={index} key={category.id} />
      ))}
      <Footer />
    </>
  )
}
