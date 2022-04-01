import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { store } from '../../../store'
import { Footer } from '../../Footer/Footer'
import { Header } from '../../Header/Header'
import { ProductList } from '../../ProductList/ProductList'

export const MenuPage = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  store.subscribe(() => setTotalPrice(store.getState().basket.totalPrice))
  const category = useSelector((store) => store.category)
  const products = useSelector((store) => store.product)

  // const categories = document.querySelector('.category')
  // const observer = new IntersectionObserver((entries) => console.log(entries))

  // observer.observe(categories[0])
  return (
    <>
      <Header totalPrice={totalPrice} />
      {category.map((list, index) => {
        let productData = products.filter((product) => {
          let arr = []
          for (let i = 0; i < list.products.length; i++) {
            if (product.id === list.products[i]) {
              return arr
            }
          }
          return null
        })

        return <ProductList category={list} categoryStyleProp={index} productData={productData} key={list.id} />
      })}
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    totalPrice: state.basket.totalPrice,
  }
}

export default connect(mapStateToProps)(Header)
