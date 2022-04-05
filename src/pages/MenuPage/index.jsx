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
  const server = 'https://rentateam-test-task-server.herokuapp.com'
  const [tooltip, setTooltip] = useValidation(server)
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(getMenu(server))
  }, [dispatch, server])

  const { menu } = useSelector((store) => store.menu)

  return (
    <>
      <Header onClick={setTooltip} />
      <DeliverySection tooltipWarning={tooltip} city='Москва' server={server} />
      <NavBar menu={menu} />
      {menu.map((category, index) => (
        <MenuCategories category={category} index={index} key={category.id} />
      ))}
      <Footer />
    </>
  )
}
